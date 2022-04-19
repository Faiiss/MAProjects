<?php
$data = [12, 45.67, "Faiss" , "2022-4-19", true , "Amsterdam-Noord", [234,67,124]];
$json = json_encode($data);

header('Content-Type: application/json');
echo $json;
?>