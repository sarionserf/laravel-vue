@extends('layouts.app')

@section('titol')
    Reseva
@endsection

@section('titolPag')
    <h4 class="text-white">RESERVA</h4>
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
                            <form action="/save-reserva" method="post" enctype="multipart/form-data">
                                @csrf
                                <input type="hidden" class="form-control mb-1" id="idJoc" name="idJoc" value="{{$joc->id}}">
                                <div class="form-group mb-4">
                                    <input type="datetime-local" class="form-control mb-1" id="data" name="data" value="{{old('data')}}">
                                </div>
                                <button type="submit" class="btn btn-outline-primary">SAVE</button>
{{--                                <a href="reserva/{{$joc->id}}/qualify" class="btn btn-outline-danger btn-sm ">QUALIFY</a>--}}
                            </form>
                            <form action="/qualify" method="post" enctype="multipart/form-data">
                                @csrf
                                <input type="hidden" class="form-control mb-1" id="idJoc" name="idJoc" value="{{$joc->id}}">
                                <button type="submit" class="btn btn-outline-danger">QUALIFY</button>
                            </form>

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
