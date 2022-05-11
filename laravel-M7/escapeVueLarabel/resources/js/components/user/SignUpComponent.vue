<template>
    <div class=" d-flex justify-content-center align-items-center m-5">
        <div class="col-12 col-md-8 col-lg-6 col-xl-4">
            <div class="card bg-dark text-white" style="border-radius: 1rem;">
                <div class="card-body p-5 ">
                    <h2 class="fw-bold mb-2 text-uppercase text-center">SIGNUP</h2>
                    <div class="mb-md-5 mt-md-4 pb-5">

                        @if($errors->any())
                        <div class="alert alert-danger">
                            <ul class="list-group">
                                @foreach($errors->all() as $error )
                                <li class="list-group-item">
                                    {{$error}}
                                </li>
                                @endforeach
                            </ul>
                        </div>
                        @endif

                        <form action="" v-on:submit.prevent="newUser()" method="post">
                            @csrf
                            <div class="form-group mb-4">
                                <label for="nom">Nom</label>
                                <input type="text" class="form-control mb-1" id="nom" name="nom" >
                            </div>
                            <div class="form-group mb-4">
                                <label for="dni">DNI</label>
                                <input type="text" class="form-control mb-1" id="dni" name="dni" >
                            </div>
                            <div class="form-group mb-4">
                                <label for="email">Email</label>
                                <input type="email" class="form-control mb-1" id="email" name="email"  >
                            </div>
                            <div class="form-group">
                                <label for="pass">Contrasenya</label>
                                <input type="password" class="form-control mb-1" id="pass" name="pass" >
                            </div>
                            <br>
                            <button type="submit" class="btn btn-outline-primary">SIGNUP</button>
                            <span class="col-6"><a href="/" class="btn btn-outline-light float-right">CANCEL</a></span>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
   export default {
       data(){


       },

    mounted() {
        console.log('Component mounted.')
    }
  }
</script>
