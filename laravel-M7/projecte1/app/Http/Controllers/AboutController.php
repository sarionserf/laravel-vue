<?php

namespace App\Http\Controllers;

use function view;

class AboutController extends Controller
{
    public function __invoke(){
        return view('about');
    }
    /*    public function index(){
            return view('about');
        }*/

}
