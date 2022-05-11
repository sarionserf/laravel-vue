<?php

class Reparacio
{

    private $id_reparacio;
    private $nom_Client;
    private $tel_Client;
    private $desc_reparacio;
    private $dispositiu;
    private $estat_rep;

    /**
     * @param $nom_Client
     * @param $tel_Client
     * @param $desc_reparacio
     * @param $dispositiu
     * @param $estat_rep
     */
    public function __construct($nom_Client, $tel_Client,$desc_reparacio, $dispositiu,  $estat_rep)
    {
        $this->nom_Client = $nom_Client;
        $this->tel_Client = $tel_Client;
        $this->desc_reparacio = $desc_reparacio;
        $this->dispositiu = $dispositiu;
        $this->estat_rep = $estat_rep;
    }

    /**
     * @return mixed
     */
    public function getIdReparacio()
    {
        return $this->id_reparacio;
    }

    /**
     * @param mixed $id_reparacio
     */
    public function setIdReparacio($id_reparacio)
    {
        $this->id_reparacio = $id_reparacio;
    }

    /**
     * @return mixed
     */
    public function getNomClient()
    {
        return $this->nom_Client;
    }

    /**
     * @param mixed $nom_Client
     */
    public function setNomClient($nom_Client)
    {
        $this->nom_Client = $nom_Client;
    }

    /**
     * @return mixed
     */
    public function getTelClient()
    {
        return $this->tel_Client;
    }

    /**
     * @param mixed $tel_Client
     */
    public function setTelClient($tel_Client)
    {
        $this->tel_Client = $tel_Client;
    }

    /**
     * @return mixed
     */
    public function getDispositiu()
    {
        return $this->dispositiu;
    }

    /**
     * @param mixed $dispositiu
     */
    public function setDispositiu($dispositiu)
    {
        $this->dispositiu = $dispositiu;
    }

    /**
     * @return mixed
     */
    public function getDescReparacio()
    {
        return $this->desc_reparacio;
    }

    /**
     * @param mixed $desc_reparacio
     */
    public function setDescReparacio($desc_reparacio)
    {
        $this->desc_reparacio = $desc_reparacio;
    }

    /**
     * @return mixed
     */
    public function getEstatRep()
    {
        return $this->estat_rep;
    }

    /**
     * @param mixed $estat_rep
     */
    public function setEstatRep($estat_rep)
    {
        $this->estat_rep = $estat_rep;
    }





}