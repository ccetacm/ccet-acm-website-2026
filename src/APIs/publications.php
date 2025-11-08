<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once '../server.php';

header("Content-Type: application/json");

function createTablesIfNotExist($conn) {
    $createPublications = "CREATE TABLE IF NOT EXISTS publications (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(500) NOT NULL,
        authors TEXT NOT NULL,
        year INT NOT NULL,
        journal VARCHAR(500),
        type VARCHAR(100),
        url VARCHAR(500),
        display_order INT DEFAULT 0,
        is_active BOOLEAN DEFAULT TRUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )";

    if (!$conn->query($createPublications)) {
        return ["success" => false, "error" => "Failed to create publications table: " . $conn->error];
    }

    $conn->query("CREATE INDEX IF NOT EXISTS idx_pub_year ON publications(year, is_active)");
    $conn->query("CREATE INDEX IF NOT EXISTS idx_pub_type ON publications(type, is_active)");
    $conn->query("CREATE INDEX IF NOT EXISTS idx_pub_order ON publications(display_order, year DESC)");

    return ["success" => true, "message" => "Tables created/verified successfully"];
}

function isValidUrl($url) {
    return filter_var($url, FILTER_VALIDATE_URL);
}

function isValidYear($year) {
    return is_numeric($year) && $year >= 1900 && $year <= date('Y') + 1;
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

        if (!empty($_GET['year'])) {
            $year = (int)$_GET['year'];
            $whereClauses[] = "year = $year";
        }

        if (!empty($_GET['year_from'])) {
            $yearFrom = (int)$_GET['year_from'];
            $whereClauses[] = "year >= $yearFrom";
        }
        if (!empty($_GET['year_to'])) {
            $yearTo = (int)$_GET['year_to'];
            $whereClauses[] = "year <= $yearTo";
        }

        if (!empty($_GET['type'])) {
            $type = $conn->real_escape_string($_GET['type']);
            $whereClauses[] = "LOWER(type) LIKE '%" . strtolower($type) . "%'";
        }

        if (!empty($_GET['search'])) {
            $search = $conn->real_escape_string($_GET['search']);
            $whereClauses[] = "(title LIKE '%$search%' OR authors LIKE '%$search%' OR journal LIKE '%$search%')";
        }

        $query = "SELECT * FROM publications WHERE " . implode(" AND ", $whereClauses);

        $sortBy = isset($_GET['sort_by']) ? $_GET['sort_by'] : 'year';
        $sortOrder = isset($_GET['sort_order']) && strtolower($_GET['sort_order']) === 'asc' ? 'ASC' : 'DESC';

        $validSortFields = ['year', 'title', 'authors', 'journal', 'display_order'];
        if (in_array($sortBy, $validSortFields)) {
            $query .= " ORDER BY $sortBy $sortOrder";
        } else {
            $query .= " ORDER BY year DESC, display_order ASC";
        }

        $limit = isset($_GET['limit']) ? (int)$_GET['limit'] : 100;
        $offset = isset($_GET['offset']) ? (int)$_GET['offset'] : 0;
        $query .= " LIMIT $limit OFFSET $offset";

        $result = $conn->query($query);

        if ($result) {
            // FIXED: Replace fetch_all() with while loop
            $publications = [];
            while ($row = $result->fetch_assoc()) {
                $publications[] = $row;
            }

            $countQuery = "SELECT COUNT(*) as total FROM publications WHERE " . implode(" AND ", $whereClauses);
            $countResult = $conn->query($countQuery);
            $total = $countResult ? $countResult->fetch_assoc()['total'] : 0;

            echo json_encode([
                "success" => true,
                "data" => $publications,
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

        $requiredFields = ['title', 'authors', 'year'];
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

        if (!isValidYear($input['year'])) {
            echo json_encode(["success" => false, "error" => "Invalid year. Must be between 1900 and " . (date('Y') + 1)]);
            break;
        }

        if (!empty($input['url']) && !isValidUrl($input['url'])) {
            echo json_encode(["success" => false, "error" => "Invalid URL format"]);
            break;
        }

        $columns = ['title', 'authors', 'year'];
        $values = [
            "'" . $conn->real_escape_string($input['title']) . "'",
            "'" . $conn->real_escape_string($input['authors']) . "'",
            (int)$input['year']
        ];

        $optionalFields = ['journal', 'type', 'url', 'display_order'];
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

        $sql = "INSERT INTO publications (" . implode(", ", $columns) . ") VALUES (" . implode(", ", $values) . ")";

        if ($conn->query($sql)) {
            $publicationId = $conn->insert_id;

            echo json_encode([
                "success" => true,
                "id" => $publicationId,
                "message" => "Publication created successfully"
            ]);
        } else {
            echo json_encode(["success" => false, "error" => $conn->error]);
        }
        break;

    case 'PATCH':
        $initResult = createTablesIfNotExist($conn);
        if (!$initResult["success"]) {
            echo json_encode($initResult);
            break;
        }

        if (empty($_GET['id'])) {
            echo json_encode(["success" => false, "error" => "Publication ID is required"]);
            break;
        }

        $id = (int)$_GET['id'];
        $updates = [];

        $allowedFields = ['title', 'authors', 'year', 'journal', 'type', 'url', 'display_order', 'is_active'];

        foreach ($input as $key => $value) {
            if (in_array($key, $allowedFields)) {
                if ($key === 'year' && !isValidYear($value)) {
                    echo json_encode(["success" => false, "error" => "Invalid year"]);
                    break 2;
                }

                if ($key === 'url' && !empty($value) && !isValidUrl($value)) {
                    echo json_encode(["success" => false, "error" => "Invalid URL format"]);
                    break 2;
                }

                if (in_array($key, ['display_order', 'year'])) {
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
        $sql = "UPDATE publications SET " . implode(", ", $updates) . " WHERE id = $id";

        if ($conn->query($sql)) {
            echo json_encode([
                "success" => true,
                "updated_rows" => $conn->affected_rows,
                "message" => "Publication updated successfully"
            ]);
        } else {
            echo json_encode(["success" => false, "error" => $conn->error]);
        }
        break;

    case 'DELETE':
        $initResult = createTablesIfNotExist($conn);
        if (!$initResult["success"]) {
            echo json_encode($initResult);
            break;
        }

        if (empty($_GET['id'])) {
            echo json_encode(["success" => false, "error" => "Publication ID is required"]);
            break;
        }

        $id = (int)$_GET['id'];

        $sql = "UPDATE publications SET is_active = 0, updated_at = CURRENT_TIMESTAMP WHERE id = $id";

        if ($conn->query($sql)) {
            echo json_encode([
                "success" => true,
                "message" => "Publication deleted successfully"
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
