@extends('layouts.app')

@section('titol')
    Llistat de tasques
@endsection


@section('contingut')
    <h1 class="text-center my-5">Vista de Tasques</h1>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card card-default">
                <div class="card-header">
                    Tasques de {{$name}}
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        @foreach($tasques as $tasca)
                            <li class="d-flex justify-content-between list-group-item">
                                <span class="pull-left"> {{$tasca->nom}} </span>
                                <a href="/tasques/{{$tasca->id}}" class="btn btn-primary btn-sm pull-right">Mostrar</a>
                            </li>
                        @endforeach
                    </ul>
                </div>
            </div>
            <br>
            <br>
            <a href="/">Pàgina Principal</a>
        </div>
    </div>
@endsection
