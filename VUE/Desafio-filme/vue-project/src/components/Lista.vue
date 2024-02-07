<template>
    <div>
        <h2 class="titulo">Lista de Filmes</h2>
        <div class="filme-container">
            <Filme v-for="filme in filmes" :key="filme.title" :filme="filme" />
        </div>
    </div>
</template>

<script>
import Filme from "./Filme.vue";

export default {
    data() {
        return {
            filmes: [
                { title: "Homem Arannha", year: 2022, img: "./src/assets/img/homem.jpg" },
                { title: "Meninas Malvadas", year: 2007, img: "./src/assets/img/meninas.jpg" },
                { title: "Minha irmã e eu", year: 2024, img: "./src/assets/img/mihairma.jpg" },
                { title: "Wish", year: 2023, img: "./src/assets/img/wish.jpg" },
                { title: "Homem Arannha", year: 2022, img: "./src/assets/img/homem.jpg" },
                { title: "Meninas Malvadas", year: 2007, img: "./src/assets/img/meninas.jpg" },
                { title: "Minha irmã e eu", year: 2024, img: "./src/assets/img/mihairma.jpg" },
                { title: "Wish", year: 2023, img: "./src/assets/img/wish.jpg" },

            ],
        };
    },
    components: {
        Filme,
    },
};
</script>

<style>
.titulo {
    margin: 0;
    padding: 20px;
    text-align: center;
}

.filme-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    margin: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>
