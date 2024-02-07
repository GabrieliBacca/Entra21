<template>
    <div class="filme">
        <ul>
            <li>
                <h3>{{ filme.title }}</h3>
                <p>{{ filme.year }}</p>
                <img :src="filme.img" :alt="filme.title" width="100px">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        filme: Object,
    },
};
</script>

<style>
p,
h3,
ul {
    margin: 0;
    padding: 0;

}

li {

    list-style: none;
    background-color: #9677D9;
    width: 400px;
    margin: 20px auto;
    padding: 10px 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
