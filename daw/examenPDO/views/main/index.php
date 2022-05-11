<?php
require_once("../../model/Role.php");
require_once("../../model/User.php");
session_start();
if (!isset($_SESSION["login"])) {
    header('Location: ../../views/users/login.php');
}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <meta name="description" content=""/>
    <meta name="author" content=""/>
    <title>HOME</title>
    <!-- Favicon-->
    <link rel="icon" type="image/x-icon" href="../assets/favicon.ico"/>
    <!-- Bootstrap icons-->
    <link href="../https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet"/>
    <!-- Core theme CSS (includes Bootstrap)-->
    <link href="../css/styles.css" rel="stylesheet"/>
</head>
<body>

<?php include_once "../../views/template/nav.php" ?>


<?php if ($_SESSION["login"]["role_user"] == "Admin") { ?>
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent d-flex m-1 ">
        <div class="text-center m-1"><a
                    href="editProduct.php?id=<?php echo $_SESSION["login"]["id_product"] ?>"
                    class="btn btn-outline-dark mt-auto">Edit</a></div>
        <div class="text-center m-1 "><a
                    href="../../controllers/product/deleteProductController.php?id=<?php echo $_SESSION["login"]["id_product"] ?>"
                    class="btn btn-danger">Delete</a></div>
    </div>

<?php } ?>



<!--enctype="multipart/form-data" pels fitchers-->



<!-- Bootstrap core JS-->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>