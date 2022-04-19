<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>vliegtuigkosten</title>
    <link rel="stylesheet" href="style.css">

</head>
<body>
<?php
include 'functions.php';

$economy1 = berekenkosten(3722, 2.05, 20);
echo $economy1. "<br>";

$economy2 = berekenkosten(9276, 3.11, 10);
echo $economy2. "<br>";

$buisness = berekenkosten(803, 2.83,0 ,1.5);
echo $buisness. "<br>";

echo "$". number_format($economy1, 2). "<br>";
echo "$". number_format($economy2, 2). "<br>";
echo "$". number_format($buisness, 2). "<br>";

?>
</body>
</html>