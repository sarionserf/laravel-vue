@extends('layouts.app')

@section('titol')
    Jocs
@endsection

@section('titolPag')
    <h4 class="text-white">JOCS</h4>
@endsection

@section('contingut')



    @isset($jocs)
        <div class="container">
            <div class="row m-4">
                @foreach($jocs as $joc)
                    <div class="card m-4" style="width: 350px;">
                        <img src="img/{{$joc->img}}" style="height: 300px" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h2 class="card-title m-3">{{$joc->nom}}</h2>
                            <a href="joc/{{$joc->id}}/update" class="btn btn-outline-success ">EDIT</a>
                            <a href="joc/{{$joc->id}}/delete" class="btn btn-outline-danger ">DELETE</a>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    @endisset

    @empty($jocs)
        not Found
    @endempty


@endsection
