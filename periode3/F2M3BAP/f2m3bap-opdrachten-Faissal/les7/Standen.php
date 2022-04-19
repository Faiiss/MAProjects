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

// select all standen
$result = $conn ->query("SELECT * FROM standen");

//data array met labels en values maken 
$data = ["Labels" =>[], "Values" => []  ];

//Met een loop door alle meterstanden: Label en Value in de data arrays toevoegen
foreach ($result as $rij){
  $data['Labels'][] = $rij['datum'];
  $data['Values'][] = $rij['stand'];
}

//stuur header naar browser dat JSON aankomt
header('Content-Type: application/json');

//Zet de $data array om naar JSON met json_encode()
$json = json_encode($data);

//Stuur  de JSON naar het scherm(browser)
echo $json;