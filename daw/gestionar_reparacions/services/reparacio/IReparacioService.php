<?php

interface IReparacioService
{

    public function getAllReparations(): array;

    public function addReparation(Reparacio $r): bool;

    public function getReparationById(string $id): Reparacio;

    public function updateReparationById(Reparacio $r): bool;

    public function deleteReparationById(string $id): bool;

    public function getGCalendarUrl($event);

}