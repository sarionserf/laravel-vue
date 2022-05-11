<?php
require_once ("../../model/Reparacio.php");
session_start();
if(!isset($_SESSION["llistarReparacions"])){
    header("Location: ../../controller/reparacions/listAllRepController.php");
}

?>
<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Inbox</title>
</head>
<body>

<header>
    <?php include_once "../template/nav.php" ?>
</header>


<div class="container p-3 mt-3">


    <table class="table table-striped table-hover col-11 mx-auto my-5 ">
        <thead class="table-dark">
        <tr>
            <th scope="col">id</th>
            <th scope="col">Client</th>
            <th scope="col">Telefon</th>
            <th scope="col">Problema</th>
            <th scope="col">Dispositiu</th>
            <th scope="col">Estat</th>
            <th scope="col"></th>
            <th scope="col"></th>
        </tr>
        <tbody>



        <?php
        foreach ($_SESSION["llistarReparacions"] as $rep) {
        ?>

            <tr>
                <td><?php echo $rep["id_reparacio"] ?></td>
                <td><?php echo $rep["nom_client"] ?></td>
                <td><?php echo $rep["tel_client"] ?></td>
                <td><?php echo $rep["desc_reparacio"] ?></td>
                <td><?php echo $rep["tipus_reparacio"] ?></td>
                <td><?php echo $rep["estat_reparacio"] ?></td>
                <td>
                    <a href="../../controller/reparacions/deleteRepController.php?id=<?php echo $rep["id_reparacio"]?>" class="btn btn-danger">Delete</a>
                </td>
                <td>
                    <a href="editReparacio.php?id=<?php echo $rep["id_reparacio"] ?>"  class="btn btn-primary">Edit</a>
                </td>
            </tr>
        <?php } ?>

        </tbody>
    </table>

</div>


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


