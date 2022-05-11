<?php

class Conex
{
    private $host;
    private $db;
    private $dsn;
    private $user;
    private $pass;
    public $conexio;

    public function __construct()
    {
        $this->host = 'mysql';
        $this->db = "inforvic_db";
        $this->dsn = 'mysql:host=' . $this->host . ';dbname=' . $this->db . ';';
        $this->user = 'samu';
        $this->pass = "123456";
    }


    public function openConnection()
    {
        try {
            $this->conexio = new PDO($this->dsn, $this->user, $this->pass);
            return $this->conexio;
        } catch (PDOException $ex) {
            echo "Error: " . $ex;
            return null;
        }
    }

    public function closeConnection()
    {
        try {
            $this->conexio = null;
            return $this->conexio;
        } catch (PDOException $ex) {
            echo "Error: " . $ex;
            return null;
        }
    }


    function selectAll($sql, $data)
    {
        $result = false;
        $this->openConnection();
        try {
            $this->statement = $this->conexio->prepare($sql);
            $this->statement->execute($data);
            $result = $this->statement->fetchAll();
            $this->closeConnection();
            return $result;
        } catch (Exception $ex) {
            $this->error = $ex->getMessage();
            $this->closeConnection();
            return false;
        }
    }

    function selectOne($sql, $data)
    {
        $result = false;
        $this->openConnection();
        try {
            $this->statement = $this->conexio->prepare($sql);
            $this->statement->execute($data);
            $result = $this->statement->fetch();
            $this->closeConnection();
            return $result;
        } catch (Exception $ex) {
            $this->error = $ex->getMessage();
            $this->closeConnection();
            return false;
        }

    }

    function select($sql)
    {
        $result = false;
        $this->openConnection();
        try {
            $this->statement = $this->conexio->prepare($sql);
            $result = $this->statement->execute();
            $this->closeConnection();
            return $result;
        } catch (Exception $ex) {
            $this->error = $ex->getMessage();
            $this->closeConnection();
            return false;
        }

    }

    function selectParams($sql, $data)
    {
        $result = false;
        $this->openConnection();
        try {
            $this->statement = $this->conexio->prepare($sql);
            $result = $this->statement->execute($data);
            $this->closeConnection();
            return $result;
        } catch (Exception $ex) {
            $this->error = $ex->getMessage();
            $this->closeConnection();
            return false;
        }

    }


}