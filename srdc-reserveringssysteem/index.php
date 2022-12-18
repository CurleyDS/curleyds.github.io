<?php
// Require DB settings with connection variable
require_once "./includes/database.php";

//Get lessons from the database with an SQL query
$lessons = getLessons($db);

//Close connection
mysqli_close($db);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    <title>Salsa Rica Dance Company</title>
</head>
<body>
    <div class="container-fluid">
        <div class="row bg-black">
            <!-- navigation-bar -->
            <?php require_once "./includes/navigation-bar.php"; ?>
        </div>
        <div class="row">
            <ul>
                <?php foreach ($lessons as $lesson) { ?>

                    <li><?= $lesson['start_datetime'] ?> - <?= $lesson['end_datetime'] ?> <a href="./details.php?id=<?= $lesson['id'] ?>">details</a></li>

                <?php } ?>
            </ul>
        </div>
    </div>
</body>
</html>