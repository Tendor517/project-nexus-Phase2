<?php

$servername = "localhost";
$username = "root"; 
$password = "root"; 
$dbname = "project";


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve and sanitize form data
$user = $conn->real_escape_string($_POST['username']);
$pass = password_hash($conn->real_escape_string($_POST['password']), PASSWORD_BCRYPT); // Hash the password
$email = $conn->real_escape_string($_POST['email']);

$sql = "INSERT INTO users (username, password, email) VALUES ('$user', '$pass', '$email')";

if ($conn->query($sql) === TRUE) {
    echo "Hi ${user}, Your account has been successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
