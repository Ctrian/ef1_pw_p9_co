<template>
    <div class="container">
        <h1>Vista Candidatos</h1>
        <Formulario v-on:agregar-user="addUsuario" />
        <Tabla v-bind:users="users" />
    </div>
</template>

<script>
import Formulario from "../components/Formulario.vue";
import Tabla from "../components/Tabla.vue";

export default {
    components: {
        Formulario,
        Tabla,
    },
    data() {
        return {
            users: []
        }
    },
    methods: {
        addUsuario(userData) {
            this.users.push(userData);
        }
    }
}
</script>

<style scoped></style>
