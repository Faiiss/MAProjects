<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FUNCTIONS</title>
    <link rel="stylesheet" href="style.css">

</head>
<body>
<?php


function currentdatetime(){
    echo date('d-m-Y H:i:s'). "<br>";
}

currentdatetime();



function add($getal1, $getal2){
    $som = $getal1 + $getal2;
    return $som;
}


function subtract($eerste, $tweede){

    $antwoord = $eerste - $tweede;
    return $antwoord;
}


function divide($getall, $getal3){
    $antwoord2 = $getall / $getal3;
    return $antwoord2;
}



function multiply($getal4, $getal5){
    $antwoord3 = $getal4 * $getal5;
    return $antwoord3;
}


function berekenRitKosten($km_afstand, $de_km_per_liter, $liter_prijs){

    
    $aantal_liters = $km_afstand / $de_km_per_liter;
  
    $kosten_euro = $aantal_liters * $liter_prijs;  
  
    return $kosten_euro;

}



function berekenkosten($afstandkm, $kmperliter, $debagage, $zaken = 1){
    $allekosten = $kmperliter * $afstandkm / 30;
    $totaal = $allekosten + $debagage * 5 * $zaken;

    return $totaal;

}


?>
</body>
</html>