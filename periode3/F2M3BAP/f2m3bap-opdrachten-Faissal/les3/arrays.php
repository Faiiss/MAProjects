<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=
    , initial-scale=1.0">
    <title>Arrays</title>
</head>
<body>
    
    <?php
        $naam = ["Faiss", "Nabil", "Vini", "Uday", "Neo",];
        sort($naam);
        $naam = ["Faiss", "Jeroen", "Adnan", "Abdi", "Max","Collin"];
        array_push($naam,"Ahmet","Leandro");
        print_r($naam);
        array_pop($naam);
        echo count($naam);
        echo "<br>";
        print_r($naam);
    
    ?>

</body>
</html>