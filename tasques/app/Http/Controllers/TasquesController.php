<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TasquesController extends Controller
{
    public function index(){
            return view('tasques.index');
    }
}
