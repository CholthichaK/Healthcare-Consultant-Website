<?php

session_start();
if(!isset($_SESSION['email']))
    {
        header("Location: index.php");
        exit(); 
}

?>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Page</title>
    <link rel="stylesheet" href="login.css">
</head>
<body style="background-color: #fff;">
    <div class="box">
        <h1> Welcome,<span> <?= $_SESSION['name'];  ?></span></h1>
        <p> This is an <span>admin</span> page.</p>
        <div class="user-actions">
  <a href="http://127.0.0.1:5001" class="nav-home">Home</a>
  <button onclick="window.location.href='logout.php'">Logout</button>
</div>
    </div>
</body>
</html>