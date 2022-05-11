<?php
require_once "../../model/Reparacio.php";
include_once "../../services/reparacio/ReparacioServiceImpl.php";
session_start();
$serviceRep = new ReparacioServiceImpl();
$serviceRep->deleteReparationById($_GET["id"]);
header("Location: ../reparacions/listAllRepController.php");
