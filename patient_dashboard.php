<?php
session_start();
require_once 'config.php';

if (!isset($_SESSION['email'])) {
    header('Location: index.php');
    exit();
}

$email = $_SESSION['email'];
$name = $_SESSION['name'] ?? 'Patient';

function table_exists($conn, $table) {
    $stmt = $conn->prepare("
        SELECT COUNT(*) AS table_count
        FROM information_schema.tables
        WHERE table_schema = DATABASE()
        AND table_name = ?
    ");

    if (!$stmt) {
        return false;
    }

    $stmt->bind_param("s", $table);
    $stmt->execute();

    $result = $stmt->get_result();
    $row = $result->fetch_assoc();

    return (int) $row['table_count'] > 0;
}

$appointments = [];
if (table_exists($conn, 'appointments')) {
    $stmt = $conn->prepare("SELECT appointment_date, appointment_time, service, created_at FROM appointments WHERE email = ? ORDER BY created_at DESC");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $appointments = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
}

$messages = [];
if (table_exists($conn, 'contact_messages')) {
    $stmt = $conn->prepare("SELECT message, created_at FROM contact_messages WHERE email = ? ORDER BY created_at DESC");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $messages = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
}
?>
<!DOCTYPE html>
<html>
<head>
  <title>Patient Dashboard</title>
  <link rel="stylesheet" href="login.css">
  <style>
    body { display:block; padding:40px; background:#f6fbff; }
    .dashboard { max-width:1000px; margin:auto; }
    .top { display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; }
    .card { background:white; padding:24px; border-radius:14px; margin-bottom:20px; box-shadow:0 12px 30px rgba(70,110,190,.12); }
    .home-btn { background:#7494ec; color:white; padding:12px 20px; border-radius:8px; text-decoration:none; }
    .muted { color:#667085; }
  </style>
</head>
<body>
  <div class="dashboard">
    <div class="top">
      <h1>Welcome, <span><?= htmlspecialchars($name) ?></span></h1>
      <a class="home-btn" href="http://127.0.0.1:5001">Home</a>
    </div>

    <div class="card">
      <h2>Your Appointments</h2>
      <?php if (empty($appointments)): ?>
        <p class="muted">No appointments booked yet.</p>
      <?php else: ?>
        <?php foreach ($appointments as $item): ?>
          <p>
            <strong><?= htmlspecialchars($item['service']) ?></strong><br>
            Date: <?= htmlspecialchars($item['appointment_date']) ?>,
            Time: <?= htmlspecialchars($item['appointment_time']) ?><br>
            Status: Booked
          </p>
          <hr>
        <?php endforeach; ?>
      <?php endif; ?>
    </div>

    <div class="card">
      <h2>Your Messages</h2>
      <?php if (empty($messages)): ?>
        <p class="muted">No contact messages sent yet.</p>
      <?php else: ?>
        <?php foreach ($messages as $msg): ?>
          <p><?= htmlspecialchars($msg['message']) ?></p>
          <small><?= htmlspecialchars($msg['created_at']) ?></small>
          <hr>
        <?php endforeach; ?>
      <?php endif; ?>
    </div>

    <a class="home-btn" href="logout.php">Logout</a>
  </div>
</body>
</html>