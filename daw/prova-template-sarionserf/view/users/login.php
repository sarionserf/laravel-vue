<?php
require_once("../../model/User.php");
include_once "../../services/user/UsersServiceImpl.php";
session_start();
unset($_SESSION["login"]);
$serviceUser = new UsersServiceImpl();
if (!isset($_SESSION["users"])) {
    echo "Inicalitzat Array";
    $admin = new User ("admin", "123456");
    $admin->setSaldo(10000000);
    $_SESSION["users"] = array($admin);
    $serviceUser->addUser($_SESSION["users"][0]);
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

    <title>LogIn</title>
</head>


<header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <div class="topLeft">
                <a class="navbar-brand" href="#">
                    <img src="icons/luck.svg" alt="" width="24" height="24" class="d-inline-block align-text-top">
                    Loteries Cirvianum
                </a>
            </div>
            <div class="topRight">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="main.php">Home</a>
                        <a class='nav-link' href='login.php'>LogIn</a></div>
                </div>
            </div>
        </div>
    </nav>
</header>

<body>
<?php
if (isset($_SESSION["errorUserMsg"]) == true) {
    ?>
    <div class="alert alert-danger" role="alert">No existeix aquest usuari</div>
    <?php
    unset($_SESSION["errorUserMsg"]);
}
?>
<?php
if (isset($_SESSION["msgCreate"]) == true) {
    ?>
    <div class="alert alert-success" role="alert">Usuari creat correctement</div>
    <?php
    unset($_SESSION["msgCreate"]);
}
?>

<div class="container">

    <div class="row d-flex justify-content-center">


        <form action="../../controller/user/loginController.php" class="col-6 p-5 my-5 border rounded bg-secondary"
              method="post">

            <h3 class="mb-3">Log In</h3>
            <div class="form-floating mb-3 mt-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="pepitolospalotes"
                       name="username">
                <label for="floatingInput">UserName</label>
                <?php
                if (isset($_SESSION["errorMsgUsername"])) {
                    echo "<span class='form-text text-danger'>" . $_SESSION["errorMsgUsername"] . "</span>";
                    unset($_SESSION["errorMsgUsername"]);
                }
                ?>
            </div>
            <div class="form-floating mt-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="pass">
                <label for="floatingPassword">Password</label>
                <?php
                if (isset($_SESSION["errorMsgPass"])) {
                    echo "<small class='form-text text-danger'>" . $_SESSION["errorMsgPass"] . "</small>";
                    unset($_SESSION["errorMsgPass"]);
                }
                ?>
            </div>
            <button type="submit" class="btn btn-success mt-3">LogIn</button>
            <br>

            <div class="text-white text-center">No tens compte?? A que esperes... Click <a href="register.php">aquí</a>
            </div>

        </form>


    </div>
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