<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>pokemon</title>
</head>
<body>
    
    <?php

        $pokemon = ["Bulbasaur", "Charmander", "squirtle", "Caterpie", "Weedle"];
        $image = ["https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTc2Mjk3OTE1NzAxMDExNjI5/pokemon-bulbasaur-nicknames.webp", "http://img1.wikia.nocookie.net/__cb20140603214916/pokemon/images/9/9b/004Charmander_AG_anime.png", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/85a954df-43b3-4b66-9e8d-94fe01b0451f/da00pu1-d49512b4-2dbb-41c1-aedd-dfef1e238dd2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg1YTk1NGRmLTQzYjMtNGI2Ni05ZThkLTk0ZmUwMWIwNDUxZlwvZGEwMHB1MS1kNDk1MTJiNC0yZGJiLTQxYzEtYWVkZC1kZmVmMWUyMzhkZDIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zJULWZMAVCYW_hyGzrXEKkZVLIJgUlz74VcmuGd8FME", "https://static.wikia.nocookie.net/sonic-pokemon-unipedia/images/8/8d/Caterpie_AG_anime.png/revision/latest/scale-to-width-down/250?cb=20131102072533", "https://3.bp.blogspot.com/_K6o-3CCSAa4/TLTMeukLfcI/AAAAAAAABMg/WH-27xhuAuA/s200/weedle.gif"];

        $lengte1 = count($pokemon);
        $lengte2 = count($image);
        for ($i = 0; $i < $lengte1; $i ++){
            echo "<h1>" . $i . " - " . $pokemon[$i] . "</h1>" .  "<img src=\"" . $image[$i]  . "\">" . "</br>";
        }
    ?>
        <img src="" alt="">
</body>
</html