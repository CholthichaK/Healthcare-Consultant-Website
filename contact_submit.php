<?php
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: http://127.0.0.1:5001/contact');
    exit();
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || $message === '') {
    header('Location: http://127.0.0.1:5001/contact?status=error');
    exit();
}

$createTableSql = "
    CREATE TABLE IF NOT EXISTS contact_messages (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(120) NOT NULL,
        email VARCHAR(160) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
";

$conn->query($createTableSql);

$stmt = $conn->prepare("
    INSERT INTO contact_messages (name, email, message)
    VALUES (?, ?, ?)
");

$stmt->bind_param("sss", $name, $email, $message);

if ($stmt->execute()) {
    header('Location: http://127.0.0.1:5001/contact?status=success');
} else {
    header('Location: http://127.0.0.1:5001/contact?status=error');
}

$stmt->close();
$conn->close();
exit();
?>