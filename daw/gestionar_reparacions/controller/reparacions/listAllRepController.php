<?php
include_once "../../model/Reparacio.php";
include_once "../../services/reparacio/ReparacioServiceImpl.php";
session_start();

$serviceRep = new ReparacioServiceImpl();
$_SESSION['llistarReparacions'] = $serviceRep->getAllReparations();

header("Location: ../../views/reparacions/inici.php");
