<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "Duurzaamhuis";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  //echo "Connected successfully";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}

// select all users
$result = $conn ->query("SELECT * FROM `meterstanden` ORDER BY datum DESC");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meterstanden</title>
</head>
<body>
 <?php
     foreach ($result as $rij) {
      echo $rij['datum'] . " - " . $rij['stand'] . " - " . $rij['soort'] . "<br />\n";
    }
    ?>
</body>
</html>