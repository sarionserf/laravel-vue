@extends('layouts.app')
@section('titol')
    @isset($tasca)
        Tasca - {{$tasca->nom}}
    @endisset
    @empty($tasca)
        Tasca - Not found
    @endempty
@endsection
@section('contingut')
    @isset($tasca)
        <h1 class="text-center my-5">
            {{$tasca->nom}}
        </h1>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card card-default">
                    <div class="card-header">
                        Detalls
                    </div>
                    <div class="card-body">
                        {{$tasca->descripcio}}
                    </div>

                </div>

                <a href="/tasques/{{$tasca->id}}/editar" class="btn btn-info btm-sm my-3"> Editar</a>

                <a href="/tasques/{{$tasca->id}}/eliminar" class="btn btn-danger btm-sm my-3"> Eliminar</a>
            </div>
        </div>
    @endisset

    @empty($tasca)
        not Found
    @endempty

@endsection

