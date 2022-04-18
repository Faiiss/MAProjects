<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>vliegtuigkost</title>
    <link rel="stylesheet" href="style.css">

</head>
<body>
<?php
include 'functions.php';

$econom1 = berekenkosten(3722, 2.05, 20);
echo $economy1. "<br>";

$econom2 = berekenkosten(9276, 3.11, 10);
echo $econom2. "<br>";

$buisness = berekenkosten(803, 2.83,0 ,1.5);
echo $buisness. "<br>";

echo "$". number_format($econom1, 2). "<br>";
echo "$". number_format($econom2, 2). "<br>";
echo "$". number_format($buisness, 2). "<br>";

?>
</body>
</html>