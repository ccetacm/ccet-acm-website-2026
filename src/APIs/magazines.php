<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once '../../server.php';

header("Content-Type: application/json");
$conn->set_charset("utf8mb4");

function createTablesIfNotExist($conn) {
    $createMagazines = "CREATE TABLE IF NOT EXISTS magazines (
        id INT AUTO_INCREMENT PRIMARY KEY,
        book_id VARCHAR(50) NOT NULL UNIQUE,
        title VARCHAR(500) NOT NULL,
        cover_image VARCHAR(500) NOT NULL,
        pdf_path VARCHAR(500) NOT NULL,
        month VARCHAR(50) NOT NULL,
        back_color VARCHAR(50) DEFAULT '#1a1a2e',
        back_text TEXT,
        display_order INT DEFAULT 0,
        is_active BOOLEAN DEFAULT TRUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )";

    if (!$conn->query($createMagazines)) {
        return ["success" => false, "error" => "Failed to create magazines table: " . $conn->error];
    }

    $conn->query("CREATE INDEX IF NOT EXISTS idx_mag_active ON magazines(is_active, display_order)");
    $conn->query("CREATE INDEX IF NOT EXISTS idx_mag_book_id ON magazines(book_id)");

    return ["success" => true, "message" => "Tables created/verified successfully"];
}

function isValidColor($color) {
    return preg_match('/^#[a-fA-F0-9]{6}$|^#[a-fA-F0-9]{3}$|^[a-zA-Z]+$/', $color);
}

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

switch ($method) {
    case 'GET':
        $initResult = createTablesIfNotExist($conn);
        if (!$initResult["success"]) {
            echo json_encode($initResult);
            break;
        }

        $whereClauses = ["is_active = 1"];

        if (!empty($_GET['id'])) {
            $id = (int)$_GET['id'];
            $whereClauses[] = "id = $id";
        }

        if (!empty($_GET['book_id'])) {
            $bookId = $conn->real_escape_string($_GET['book_id']);
            $whereClauses[] = "book_id = '$bookId'";
        }

        if (!empty($_GET['month'])) {
            $month = $conn->real_escape_string($_GET['month']);
            $whereClauses[] = "month LIKE '%$month%'";
        }

        if (!empty($_GET['search'])) {
            $search = $conn->real_escape_string($_GET['search']);
            $whereClauses[] = "(title LIKE '%$search%' OR month LIKE '%$search%' OR back_text LIKE '%$search%')";
        }

        $query = "SELECT * FROM magazines WHERE " . implode(" AND ", $whereClauses);

        $sortBy = isset($_GET['sort_by']) ? $_GET['sort_by'] : 'display_order';
        $sortOrder = isset($_GET['sort_order']) && strtolower($_GET['sort_order']) === 'asc' ? 'ASC' : 'DESC';

        $validSortFields = ['display_order', 'title', 'month', 'created_at'];
        if (in_array($sortBy, $validSortFields)) {
            $query .= " ORDER BY $sortBy $sortOrder";
        } else {
            $query .= " ORDER BY display_order ASC";
        }

        $limit = isset($_GET['limit']) ? (int)$_GET['limit'] : 100;
        $offset = isset($_GET['offset']) ? (int)$_GET['offset'] : 0;
        $query .= " LIMIT $limit OFFSET $offset";

        $result = $conn->query($query);

        if ($result) {
            $magazines = [];
            while ($row = $result->fetch_assoc()) {
                $magazines[] = $row;
            }

            $countQuery = "SELECT COUNT(*) as total FROM magazines WHERE " . implode(" AND ", $whereClauses);
            $countResult = $conn->query($countQuery);
            $total = $countResult ? $countResult->fetch_assoc()['total'] : 0;

            echo json_encode([
                "success" => true,
                "data" => $magazines,
                "total" => (int)$total,
                "limit" => $limit,
                "offset" => $offset
            ]);
        } else {
            echo json_encode(["success" => false, "error" => $conn->error]);
        }
        break;

    case 'POST':
        $initResult = createTablesIfNotExist($conn);
        if (!$initResult["success"]) {
            echo json_encode($initResult);
            break;
        }

        $requiredFields = ['book_id', 'title', 'cover_image', 'pdf_path', 'month'];
        $missingFields = [];

        foreach ($requiredFields as $field) {
            if (empty($input[$field])) {
                $missingFields[] = $field;
            }
        }

        if (!empty($missingFields)) {
            echo json_encode(["success" => false, "error" => "Missing required fields: " . implode(", ", $missingFields)]);
            break;
        }

        if (!empty($input['back_color']) && !isValidColor($input['back_color'])) {
            echo json_encode(["success" => false, "error" => "Invalid color format. Use hex (#000000) or color name"]);
            break;
        }

        $columns = ['book_id', 'title', 'cover_image', 'pdf_path', 'month'];
        $values = [
            "'" . $conn->real_escape_string($input['book_id']) . "'",
            "'" . $conn->real_escape_string($input['title']) . "'",
            "'" . $conn->real_escape_string($input['cover_image']) . "'",
            "'" . $conn->real_escape_string($input['pdf_path']) . "'",
            "'" . $conn->real_escape_string($input['month']) . "'"
        ];

        $optionalFields = ['back_color', 'back_text', 'display_order'];
        foreach ($optionalFields as $field) {
            if (isset($input[$field]) && $input[$field] !== '') {
                $columns[] = $field;
                if ($field === 'display_order') {
                    $values[] = (int)$input[$field];
                } else {
                    $values[] = "'" . $conn->real_escape_string($input[$field]) . "'";
                }
            }
        }

        $columns[] = 'is_active';
        $values[] = '1';

        $sql = "INSERT INTO magazines (" . implode(", ", $columns) . ") VALUES (" . implode(", ", $values) . ")";

        if ($conn->query($sql)) {
            $magazineId = $conn->insert_id;

            echo json_encode([
                "success" => true,
                "id" => $magazineId,
                "message" => "Magazine created successfully"
            ]);
        } else {
            if ($conn->errno === 1062) {
                echo json_encode(["success" => false, "error" => "Magazine with this book_id already exists"]);
            } else {
                echo json_encode(["success" => false, "error" => $conn->error]);
            }
        }
        break;

    case 'PATCH':
        $initResult = createTablesIfNotExist($conn);
        if (!$initResult["success"]) {
            echo json_encode($initResult);
            break;
        }

        if (empty($_GET['id'])) {
            echo json_encode(["success" => false, "error" => "Magazine ID is required"]);
            break;
        }

        $id = (int)$_GET['id'];
        $updates = [];

        $allowedFields = ['book_id', 'title', 'cover_image', 'pdf_path', 'month', 'back_color', 'back_text', 'display_order', 'is_active'];

        foreach ($input as $key => $value) {
            if (in_array($key, $allowedFields)) {
                if ($key === 'back_color' && !empty($value) && !isValidColor($value)) {
                    echo json_encode(["success" => false, "error" => "Invalid color format"]);
                    break 2;
                }

                if ($key === 'display_order') {
                    $updates[] = "$key = " . (int)$value;
                } else if ($key === 'is_active') {
                    $updates[] = "$key = " . ($value ? 1 : 0);
                } else {
                    $updates[] = "$key = '" . $conn->real_escape_string($value) . "'";
                }
            }
        }

        if (empty($updates)) {
            echo json_encode(["success" => false, "error" => "No valid fields to update"]);
            break;
        }

        $updates[] = "updated_at = CURRENT_TIMESTAMP";
        $sql = "UPDATE magazines SET " . implode(", ", $updates) . " WHERE id = $id";

        if ($conn->query($sql)) {
            echo json_encode([
                "success" => true,
                "updated_rows" => $conn->affected_rows,
                "message" => "Magazine updated successfully"
            ]);
        } else {
            if ($conn->errno === 1062) {
                echo json_encode(["success" => false, "error" => "Magazine with this book_id already exists"]);
            } else {
                echo json_encode(["success" => false, "error" => $conn->error]);
            }
        }
        break;

    case 'DELETE':
        $initResult = createTablesIfNotExist($conn);
        if (!$initResult["success"]) {
            echo json_encode($initResult);
            break;
        }

        if (empty($_GET['id'])) {
            echo json_encode(["success" => false, "error" => "Magazine ID is required"]);
            break;
        }

        $id = (int)$_GET['id'];

        $sql = "UPDATE magazines SET is_active = 0, updated_at = CURRENT_TIMESTAMP WHERE id = $id";

        if ($conn->query($sql)) {
            echo json_encode([
                "success" => true,
                "message" => "Magazine deleted successfully"
            ]);
        } else {
            echo json_encode(["success" => false, "error" => $conn->error]);
        }
        break;

    default:
        echo json_encode(["success" => false, "error" => "Invalid request method"]);
        break;
}

$conn->close();
?>