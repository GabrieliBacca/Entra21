<template>
    <div>
        <h2>Lista de Filmes</h2>
        <Filme v-for="filme in filmes" :key="filme.title" :filme="filme" />
    </div>
</template>

<script>
import Filme from "./Filme.vue";

export default {
    data() {
        return {
            filmes: [
                { title: "Filme 1", year: 2022, img: "img/filme1.jpg" },
                { title: "Filme 2", year: 2023, img: "img/filme2.jpg" },
                { title: "Filme 3", year: 2024, img: "img/filme3.jpg" },
            ],
        };
    },
    components: {
        Filme,
    },
};
</script>

<style>
/* Seu estilo aqui */
</style>
