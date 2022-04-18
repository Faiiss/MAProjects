<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>asso arays</title>
</head>
<body>
    
    <?php

        $weekdagen =['Weekdag1', 'Weekdag2', 'Weekdag3', 'Weekdag4', 'Weekdag5'];
        $weekdag["Weekdag1"] = 10;
        $weekdag["Weekdag2"] = 14;
        $weekdag["Weekdag3"] = 12;
        $weekdag["Weekdag4"] = 9;
        $weekdag["Weekdag5"] = 8;
        $weekdaag =['Weekdag11', 'Weekdag12', 'Weekdag13', 'Weekdag14', 'Weekdag15'];
        $weekdag["Weekdag11"] = "Maandag";
        $weekdag["Weekdag12"] = "Dinsdag";
        $weekdag["Weekdag13"] = "Woensdag";
        $weekdag["Weekdag14"] = "Donderdag";
        $weekdag["Weekdag15"] = "Vrijdag";

    ?>

    <style>
        table, th, td {
            border:1px solid black;
        }
    </style>

    <table>
        <tr>
            <th>Weekdagen</th>
            <th>Tempratuur in graden</th>
        </tr>
        <tr>
            <td>
                <?php echo  $weekdag["Weekdag11"]; ?>
            </td>
            <td>
                <?php echo  $weekdag["Weekdag1"]; ?> graden
            </td>
        </tr>
        <tr>
            <td>
                <?php echo  $weekdag["Weekdag12"]; ?>
            </td>
            <td>
                <?php echo  $weekdag["Weekdag2"]; ?> graden
            </td>
        </tr>
        <tr>
            <td>
                <?php echo  $weekdag["Weekdag13"]; ?>
            </td>
            <td>
                <?php echo  $weekdag["Weekdag3"]; ?> graden
            </td>
        </tr>
        <tr>
            <td>
                <?php echo  $weekdag["Weekdag14"]; ?>
            </td>
            <td>
                <?php echo  $weekdag["Weekdag4"]; ?> graden
            </td>
        </tr>
        <tr>
            <td>
                <?php echo  $weekdag["Weekdag15"]; ?>
            </td>
            <td>
                <?php echo  $weekdag["Weekdag5"]; ?> graden
            </td>
        </tr>
    </table>

</body>
</html>