<?php
require_once "../../model/Reparacio.php";
include_once "../../services/reparacio/ReparacioServiceImpl.php";
session_start();


$servieRep = new ReparacioServiceImpl();
?>
<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="css/login.css">
    <link rel="stylesheet" href="css/navergador.css">
    <title>Registre</title>
</head>
<body>

<header>
    <?php include_once "../template/nav.php" ?>
</header>

<form action="../../controller/reparacions/addEventController.php"
      class="row g-3 col-6 mx-auto my-5 p-5 border border-dark rounded bg-light" method="post">

    <div class="col-12">
        <h1 style="color: #62A5A2">Nou Event Reparació</h1>
    </div>

    <div class="col-12 mt-3">
        <label for="inputFirstName" class="form-label">Titol:</label>
        <input type="text" class="form-control  " id="inputLastName" name="titol"
               value="<?php echo $_SESSION["dades"]["estat"] ?? '' ?>">
        <?php
        if (isset($_SESSION["errorMsgestat"])) {
            echo "<small class='form-text text-danger'>".$_SESSION["errorMsgestat"]."</small>";
            unset($_SESSION["errorMsgestat"]);
        }
        ?>
    </div>

    <div class="col-12 mt-3">
        <label for="inputFirstName" class="form-label">Descripcio:</label>
        <input type="text" class="form-control  " id="inputLastName" name="desc"
               value="<?php echo $_SESSION["dades"]["estat"] ?? '' ?>">
        <?php
        if (isset($_SESSION["errorMsgestat"])) {
            echo "<small class='form-text text-danger'>".$_SESSION["errorMsgestat"]."</small>";
            unset($_SESSION["errorMsgestat"]);
        }
        ?>
    </div>

    <div class="col-12 mt-3">
        <label for="inputFirstName" class="form-label">Localitat:</label>
        <input type="text" class="form-control  " id="inputLastName" name="loc"
               value="<?php echo $_SESSION["dades"]["estat"] ?? '' ?>">
        <?php
        if (isset($_SESSION["errorMsgestat"])) {
            echo "<small class='form-text text-danger'>".$_SESSION["errorMsgestat"]."</small>";
            unset($_SESSION["errorMsgestat"]);
        }
        ?>
    </div>


    <div class="col-md-6 mt-3">
        <label for="inputAddress" class="form-label">Data Inici:</label>
        <input type="date" class="form-control " id="inputAddress" name="dataIn"
               value="<?php echo $_SESSION["dades"]["data"] ?? '' ?>">
        <?php
        if (isset($_SESSION["errorMsgData"])) {
            echo "<small class='form-text text-danger'>".$_SESSION["errorMsgData"]."</small>";
            unset($_SESSION["errorMsgData"]);
        }
        ?>
    </div>

    <div class="col-md-6 mt-3">
        <label for="inputAddress" class="form-label">Hora inici:</label>
        <input type="time" class="form-control " id="inputAddress" name="HoraIn"
               value="<?php echo $_SESSION["dades"]["data"] ?? '' ?>">
        <?php
        if (isset($_SESSION["errorMsgData"])) {
            echo "<small class='form-text text-danger'>".$_SESSION["errorMsgData"]."</small>";
            unset($_SESSION["errorMsgData"]);
        }
        ?>
    </div>


    <div class="col-md-6 mt-3">
        <label for="inputAddress" class="form-label">Data Fi:</label>
        <input type="date" class="form-control " id="inputAddress" name="dataFi"
               value="<?php echo $_SESSION["dades"]["data"] ?? '' ?>">
        <?php
        if (isset($_SESSION["errorMsgData"])) {
            echo "<small class='form-text text-danger'>".$_SESSION["errorMsgData"]."</small>";
            unset($_SESSION["errorMsgData"]);
        }
        ?>
    </div>

    <div class="col-md-6 mt-3">
        <label for="inputAddress" class="form-label">Hora Final:</label>
        <input type="time" class="form-control " id="inputAddress" name="HoraFi"
               value="<?php echo $_SESSION["dades"]["data"] ?? '' ?>">
        <?php
        if (isset($_SESSION["errorMsgData"])) {
            echo "<small class='form-text text-danger'>".$_SESSION["errorMsgData"]."</small>";
            unset($_SESSION["errorMsgData"]);
        }
        ?>
    </div>


    <div class="col-12 mt-3">
        <button type="submit">Send</button>
        <a  href="<?php echo $_SESSION ["cal"] ?>"><img src="http://www.google.com/calendar/images/ext/gc_button6_es.gif" border="0"></a>
        <a href="inici.php" act><input type="button" class="btn btn-primary" value="Cancel"></a>
    </div>



</form>


<!-- Optional JavaScript; choose one of the two! -->

<!-- Option 1: Bootstrap Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>

<!-- Option 2: Separate Popper and Bootstrap JS -->
<!--
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
-->
</body>
</html>
