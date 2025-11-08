<?php
require_once '../server.php';

header('Content-Type: application/json');

if ($conn->ping()) {
    echo json_encode([
        'status' => 'success',
        'message' => 'Connected successfully'
    ]);
} else {
    echo json_encode([
        'status' => 'error',
        'message' => 'Connection failed'
    ]);
}

$conn->close();
?>