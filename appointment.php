<?php
session_start();
require_once 'config.php';
if (!isset($_SESSION['email'])) {
    header('Location: index.php?next=appointment.php');
    exit();
}

$services = [
    'Cardiology',
    'Neurology',
    'Serology',
    'Infectious Disease',
    'Urology',
    'Plastic Surgery',
    'Pediatrics',
    'Dentistry / Dental Clinic',
];

$genders = ['male' => 'Male', 'female' => 'Female', 'other' => 'Other'];

$formData = [
    'name' => '',
    'email' => '',
    'tel' => '',
    'address' => '',
    'city' => '',
    'state' => '',
    'pin' => '',
    'country' => '',
    'date' => '',
    'time' => '',
    'service' => '',
    'gender' => '',
];

$errors = [];
$successMessage = '';

function clean_input($value)
{
    return trim((string) $value);
}

function e($value)
{
    return htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8');
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    foreach ($formData as $field => $value) {
        $formData[$field] = clean_input($_POST[$field] ?? '');
    }

    if ($formData['name'] === '') {
        $errors[] = 'Please enter your name.';
    }

    if (!filter_var($formData['email'], FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Please enter a valid email address.';
    }

    if ($formData['tel'] === '') {
        $errors[] = 'Please enter your telephone number.';
    }

    foreach (['address', 'city', 'state', 'pin', 'country', 'date', 'time'] as $field) {
        if ($formData[$field] === '') {
            $errors[] = 'Please complete all required fields.';
            break;
        }
    }

    if (!in_array($formData['service'], $services, true)) {
        $errors[] = 'Please select a service.';
    }

    if (!array_key_exists($formData['gender'], $genders)) {
        $errors[] = 'Please select a gender.';
    }

    if (empty($errors)) {
        $createTableSql = "
            CREATE TABLE IF NOT EXISTS appointments (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(120) NOT NULL,
                email VARCHAR(160) NOT NULL,
                tel VARCHAR(40) NOT NULL,
                address VARCHAR(255) NOT NULL,
                city VARCHAR(100) NOT NULL,
                state VARCHAR(100) NOT NULL,
                pin VARCHAR(20) NOT NULL,
                country VARCHAR(100) NOT NULL,
                appointment_date DATE NOT NULL,
                appointment_time TIME NOT NULL,
                service VARCHAR(120) NOT NULL,
                gender VARCHAR(20) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ";

        if (!$conn->query($createTableSql)) {
            $errors[] = 'Could not prepare the appointment table. Please try again.';
        } else {
            $stmt = $conn->prepare("
                INSERT INTO appointments
                    (name, email, tel, address, city, state, pin, country, appointment_date, appointment_time, service, gender)
                VALUES
                    (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ");

            if (!$stmt) {
                $errors[] = 'Could not connect the appointment form to the database.';
            } else {
                $stmt->bind_param(
                    'ssssssssssss',
                    $formData['name'],
                    $formData['email'],
                    $formData['tel'],
                    $formData['address'],
                    $formData['city'],
                    $formData['state'],
                    $formData['pin'],
                    $formData['country'],
                    $formData['date'],
                    $formData['time'],
                    $formData['service'],
                    $formData['gender']
                );

                if ($stmt->execute()) {
                    $successMessage = 'Your appointment has been booked successfully.';
                    $formData = array_map(static fn () => '', $formData);
                } else {
                    $errors[] = 'Could not book your appointment. Please try again.';
                }

                $stmt->close();
            }
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Appointment</title>
    <link rel="stylesheet" href="appointment.css">
</head>
<body>
   <nav class="page-nav">
  <a href="http://127.0.0.1:5000" class="nav-home">Home</a>
</nav>
    <div class="form-container">
        <form action="appointment.php" method="post">
            <h2>Book an Appointment</h2>

            <?php if ($successMessage !== ''): ?>
                <div class="message success"><?= e($successMessage); ?></div>
            <?php endif; ?>

            <?php if (!empty($errors)): ?>
                <div class="message error">
                    <?= e($errors[0]); ?>
                </div>
            <?php endif; ?>

            <div>
                <input type="text" placeholder="Name" name="name" value="<?= e($formData['name']); ?>" required>
            </div>

            <div class="form-row">
                <input type="email" placeholder="Email" name="email" value="<?= e($formData['email']); ?>" required>
                <input type="tel" placeholder="Telephone no:" name="tel" value="<?= e($formData['tel']); ?>" required>
            </div>

            <div>
                <input type="text" placeholder="Address" name="address" value="<?= e($formData['address']); ?>" required>
            </div>

            <div class="form-row">
                <input type="text" placeholder="City" name="city" value="<?= e($formData['city']); ?>" required>
                <input type="text" placeholder="State" name="state" value="<?= e($formData['state']); ?>" required>
            </div>

            <div class="form-row">
                <input type="text" placeholder="Pin Code" name="pin" value="<?= e($formData['pin']); ?>" required>
                <input type="text" placeholder="Country" name="country" value="<?= e($formData['country']); ?>" required>
            </div>

            <div class="date">
                <input type="date" name="date" value="<?= e($formData['date']); ?>" required>
                <input type="time" name="time" value="<?= e($formData['time']); ?>" required>
            </div>

            <div class="form-row">
                <select name="service" id="service" required>
                    <option value="">Select Service</option>
                    <?php foreach ($services as $service): ?>
                        <option value="<?= e($service); ?>" <?= $formData['service'] === $service ? 'selected' : ''; ?>>
                            <?= e($service); ?>
                        </option>
                    <?php endforeach; ?>
                </select>

                <select name="gender" id="gender" required>
                    <option value="">Gender</option>
                    <?php foreach ($genders as $value => $label): ?>
                        <option value="<?= e($value); ?>" <?= $formData['gender'] === $value ? 'selected' : ''; ?>>
                            <?= e($label); ?>
                        </option>
                    <?php endforeach; ?>
                </select>
            </div>

            <button type="submit">Book Appointment</button>
            <button type="reset">Reset</button>
        </form>
    </div>
</body>
</html>