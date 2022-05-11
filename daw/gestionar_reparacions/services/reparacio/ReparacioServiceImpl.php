<?php
include_once "../../services/Conex.php";
require_once("IReparacioService.php");

class ReparacioServiceImpl implements IReparacioService
{


    public function getAllReparations(): array
    {
        $sql = "SELECT * FROM reparacions";
        $con = new Conex();
        return ($con->selectAll($sql, null));
    }

    public function addReparation(Reparacio $r): bool
    {

        $sql = "INSERT INTO reparacions(id_reparacio, nom_client, tel_client, desc_reparacio, tipus_reparacio, estat_reparacio)VALUES (null,?,?,?,?,?)";
        $parametres = array($r->getNomClient(), $r->getTelClient(), $r->getDescReparacio(), $r->getDispositiu(), $r->getEstatRep());
        $con = new Conex();
        if ($con->selectParams($sql, $parametres)) {
            return true;
        }
        return false;
    }

    public function getReparationById(string $id): Reparacio
    {
        $sql = "SELECT * FROM reparacions WHERE id_reparacio= ?";
        $parametres = array($id);
        $con = new Conex();
        $result = $con->selectOne($sql, $parametres);
        return new Reparacio($result['nom_client'], $result['tel_client'], $result['desc_reparacio'], $result['tipus_reparacio'], $result['estat_reparacio']);
    }

    public function updateReparationById(Reparacio $r): bool
    {
        $sql = "UPDATE reparacions SET nom_client=?, tel_client=? ,desc_reparacio=?,tipus_reparacio=?, estat_reparacio=? WHERE id_reparacio=?";
        $parametres = array($r->getNomClient(), $r->getTelClient(), $r->getDescReparacio(), $r->getDispositiu(), $r->getEstatRep(), $r->getIdReparacio());
        $con = new Conex();
        if ($con->selectParams($sql, $parametres)) {
            return true;
        }
        return false;
    }

    public function deleteReparationById(string $id): bool
    {
        $sql = "DELETE FROM reparacions WHERE id_reparacio=?";
        $parametres = array($id);
        $con = new Conex();
        if ($con->selectOne($sql, $parametres)) {
            return true;
        }
        return false;
    }


    public function getGCalendarUrl($event) {
        $titulo = urlencode($event['titulo']);
        $descripcion = urlencode($event['descripcion']);
        $localizacion = urlencode($event['localizacion']);
        $start=new DateTime($event['fecha_inicio'].' '.$event['hora_inicio'].' '.date_default_timezone_get());
        $end=new DateTime($event['fecha_fin'].' '.$event['hora_fin'].' '.date_default_timezone_get()); $dates = urlencode($start->format("Ymd\THis")) . "/" . urlencode($end->format("Ymd\THis"));
        $name = urlencode($event['nombre']);
        $url = urlencode($event['url']);
        $gCalUrl = "http://www.google.com/calendar/event?action=TEMPLATE&amp;text=$titulo&amp;dates=$dates&amp;details=$descripcion&amp;location=$localizacion&amp;trp=false&amp;sprop=$url&amp;sprop=name:$name";
        return ($gCalUrl);
    }
}