<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SCRIPT</title>
    <link rel="stylesheet" href="style.css">

</head>
<body>
<?php
include 'functions.php';

currentDateTime();

$add_result = add(100, 200);
echo $add_result. "<br>"; 

$aftrek_result = subtract(100, 300);
echo $aftrek_result. "<br>";

$multiply_result = multiply(20, 20);
echo $multiply_result. "<br>";

$istanbul = berekenRitKosten(1991, 18.47, 2.23);
echo $istanbul. "<br>";

$divide_result = divide(100, 18);
echo $divide_result. "<br>";

echo number_format($divide_result, 2). "<br>";

$berlijn = berekenRitKosten(663, 15, 1.90);
echo $berlijn. "<br>";

$paris = berekenRitKosten(1438, 20, 1.46);
echo $paris. "<br>";

echo "$". number_format($paris, 2). "<br>";
echo "$". number_format($berlijn, 2). "<br>";
echo "$". number_format($istanbul, 2). "<br>";


?>


</body>
</html>