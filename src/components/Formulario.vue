<template>
    <div class="container">
        <div class="formulario">
            <h1>Formulario componente</h1>
            <form action="">
                <div class="foto">
                    <label for="">Fotografia</label>
                    <img :src="foto" alt="no se encuentra">
                </div>
                <div class="datos">
                    <label for="id_titulo">Titulo</label>
                    <input type="text" id="id_titulo" v-model="titulo">

                    <label for="id_nombre">Nombre</label>
                    <input type="text" id="id_nombre" v-model="nombre">

                    <label for="id_apellido">Apellido</label>
                    <input type="text" id="id_apellido" v-model="apellido">

                    <label for="id_m1">Número de Calle</label>
                    <input type="text" id="id_m1" v-model="m1">

                    <label for="id_m2">Nombre de Calle</label>
                    <input type="text" id="id_m2" v-model="m2">
                </div>
                <div class="centrar-botones">
                    <button type="button" v-on:click="obtenerUser()">Buscar</button>
                    <button type="button" v-on:click="agregarUser()">Agregar</button>
                </div>
            </form>
        </div>
        <!-- <div class="tabla">
            <thead>
                <tr>
                    <td>Titulo</td>
                    <td>Nombre</td>
                    <td>Apellido</td>
                    <td>M1</td>
                    <td>M2</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.titulo }}</td>
                    <td>{{ user.nombre }}</td>
                    <td>{{ user.apellido }}</td>
                    <td>{{ user.m1 }}</td>
                    <td>{{ user.m2 }}</td>
                </tr>
            </tbody>
        </div> -->
    </div>
</template>

<script>
import { obtenerUsuarioFachada } from "../client/randomUserClient.js";

export default {
    data() {
        return {
            foto: null,
            titulo: null,
            nombre: null,
            apellido: null,
            m1: null,
            m2: null,
        }
    },
    methods: {
        async obtenerUser() {
            const res = await obtenerUsuarioFachada();
            console.log(res);
            this.titulo = res.results[0].name.title;
            this.nombre = res.results[0].name.first;
            this.apellido = res.results[0].name.last;
            this.foto = res.results[0].picture.large;
            this.m1 = res.results[0].location.street.number;
            this.m2 = res.results[0].location.street.name;
            console.log("titulo" + this.titulo)
        },
        agregarUser() {
            this.$emit('agregar-user', {
                titulo: this.titulo,
                nombre: this.nombre,
                apellido: this.apellido,
                m1: this.m1,
                m2: this.m2,
            });
        }
    }
}
</script>

<style scoped>
.container,
.datos {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.centrar-botones {
    margin-top: 10px;
    padding: 10px;
}

button {
    margin-right: 10px;
}

label {
    display: flex;
    text-align: left;
    justify-content: left;
    justify-items: flex-start;
    height: 100%;
}
</style>
