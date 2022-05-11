<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tasca;


class TasquesController extends Controller
{
    public function index(){
        $tasques = Tasca::all();
        $name = 'Samuel Ntim';
        return view('tasques.index',['tasques' => $tasques , 'name' => $name]);

    }

    public function show (Tasca $tasca){
        return view('tasques.showTasca')-> with(['tasca'=>$tasca]);
    }


    public function create (){
        return view('tasques.newTasca');
    }


    private function validateTasca(Request $req){
        return $req->validate([
            'nom'=>'required|min:6|max:20',
            'descripcio'=>'required',

        ]);
    }


    public function store (Request $request){

        $validated= $this->validateTasca($request);

        $tasca = new Tasca();
        $tasca -> nom = $request['nom'];
        $tasca -> descripcio = $request['descripcio'];
        $tasca -> completat = false;
        $tasca->save();

        return redirect('/tasques');
    }


    public function edit(Tasca $tasca){

        return view('tasques.editTasca')->with(['tasca'=>$tasca]);
    }

    public function update (Request $req, Tasca $tasca){

        $validated= $this->validateTasca($req);
        $data = $req->all();

        $tasca->nom=$data['nom'];
        $tasca->descripcio=$data['descripcio'];

        //Enviem a la bases de dades

        $tasca->save();
        return redirect('/tasques');
    }

    public function destroy (Tasca $tasca){

        //Eliminem  el registre
        $tasca->delete();

        return redirect('/tasques');
    }



}
