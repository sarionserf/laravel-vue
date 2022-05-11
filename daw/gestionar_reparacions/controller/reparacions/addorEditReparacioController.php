<?php
include_once "../../model/Reparacio.php";
include_once "../../services/reparacio/ReparacioServiceImpl.php";

session_start();

$_SESSION["errorMsg"] = false;


if (!isset($_POST["nomCli"]) or empty($_POST["nomCli"])) {
    $_SESSION["errorMsgnom"] = "Es obligatori omplir el camp";
    $_SESSION["errorMsg"] = true;
}
if (!isset($_POST["telCli"]) or empty($_POST["telCli"])) {
    $_SESSION["errorMsgtel"] = "Es obligatori omplir el camp";
    $_SESSION["errorMsg"] = true;
}
if (!isset($_POST["tipus"]) or empty($_POST["tipus"])) {
    $_SESSION["errorMsgTip"] = "Es obligatori omplir el camp";
    $_SESSION["errorMsg"] = true;
}
if (!isset($_POST["data"]) or empty($_POST["data"])) {
    $_SESSION["errorMsgData"] = "Es obligatori omplir el camp";
    $_SESSION["errorMsg"] = true;
}
if (!isset($_POST["descRep"]) or empty($_POST["descRep"])) {
    $_SESSION["errorMsgDesc"] = "Es obligatori omplir el camp";
    $_SESSION["errorMsg"] = true;
}

if (!isset($_POST["estat"]) or empty($_POST["estat"])) {
    $_SESSION["errorMsgestat"] = "Es obligatori omplir el camp";
    $_SESSION["errorMsg"] = true;
}

$serviceRep = new ReparacioServiceImpl();
if (!isset($_POST["idRep"])) {


    if ($_SESSION["errorMsg"]) {
        $_SESSION["dades"] = $_POST;
        header('Location: ../../views/reparacions/addReparacio.php');
    }else{

        unset($_SESSION["dades"]);
        $rep = new Reparacio($_POST["nomCli"],$_POST["telCli"],$_POST["descRep"],$_POST["tipus"],$_POST["estat"]);
        $serviceRep->addReparation($rep);
        header("Location: ../reparacions/listAllRepController.php");

    }

}else{



    if ($_SESSION["errorMsg"]) {
        $_SESSION["dades"] = $_POST;
        header('Location: ../../views/reparacions/editReparacio.php?id='.$_POST["idRep"]);
    } else {
        $objRep = $serviceRep->getReparationById($_POST["idRep"]);
        $rep = new Reparacio($_POST["nomCli"],$_POST["telCli"],$_POST["descRep"],$_POST["tipus"],$_POST["estat"]);
        $rep->setIdReparacio($_POST["idRep"]);
        $serviceRep->updateReparationById($rep);
        header("Location: ../reparacions/listAllRepController.php");

    }

}
