<template>
    <div class="d-flex flex-row">
        <div style="">
            <div class="card" style="width:1000px ">
                <div class="card-header">CONFIRMACIÓ RESERVA</div>
                <div class="card-body">
                    <table class="table table-striped">
                        <thead>
                        <tr>

                            <th scope="col">USUARI</th>
                            <th scope="col">DATA RESERVA</th>
                            <th scope="col">HORA RESERVA</th>
                            <th scope="col">JOC</th>
                            <th scope="col">ACCIÓ</th>
                        </tr>
                        </thead>
                        <tbody >
                        <tr v-for="(item, index) in reserves" :key="index">
                            <td>{{ item.usuari }}</td>
                            <td>{{ item.data }}</td>
                            <td>{{ item.hora }}</td>
                            <td>{{ item.nomjoc }}</td>
                            <td>
                                <button class="btn btn-danger btn-sm"
                                        @click="reservaConfirmat(item)" v-if="!item.confirmat" >Acceptar
                                </button>
                                <button class="btn btn-warning btn-sm"
                                        @click="eliminarReserva(item, index)">Denegar
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment";

export default {

    data() {

        return{
            reserves: [],

        }

    },

    created() {

        axios.get("/reserva")
            .then(res => {

                res.data.forEach(element => {

                    let reserva = {id: null  ,data:'', hora:'',  nomjoc:null, usuari:null,  confirmat:false }
                    reserva.id = element.id
                    const d = new Date(element.dataReserva);
                    reserva.data=  moment(d).format("DD / MM / YYYY");
                    reserva.hora=  moment(d).format("hh:mm");

                    axios.get(`/joc/${element.JocID}`).then(result => {
                        reserva.nomjoc = result.data.nom
                    })

                    axios.get(`/user/${element.userId}`).then(result => {
                        reserva.usuari = result.data.name
                    })

                    reserva.confirmat = element.confirmat
                    this.reserves.push(reserva)

                });
            })

    },


    methods: {



        reservaConfirmat(item){

            let confirmat = item.confirmat =true
            const params = {confirmat: confirmat};

            axios.put(`/reserva/${item.id}`, params)
                .then(res => {
                    const index = this.reserves.findIndex(reservaBusca => reservaBusca.id === item.id)
                    this.reserves[index].confirmat = res.data.confirmat
                })
        },


        eliminarReserva(item, index) {
            axios.delete(`/reserva/${item.id}`)
                .then(() => {
                    this.reserves.splice(index, 1)
                })
        },





    }




}
</script>


