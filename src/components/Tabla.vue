<template>
    <div class="container">
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
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
    props: {
        users: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style scoped></style>
