<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h4>Students</h4>
                <RouterLink to="/students/create" class="btn btn-primary float-end">Novo Estudante</RouterLink>
            </div>
        </div>
    </div>
    <div class="card-body">
        <table class="table table-boardered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Curso</th>
                    <th>Email</th>
                </tr>
            </thead>

            <tbody v-if="this.books.length > 0">
                <tr v-for="(book, index) in this.books" :key="index">
                    <td>{{ book.id }} </td>
                    <td>{{ book.name }} </td>
                    <td>{{ book.username }} </td>
                    <td>{{ book.email }} </td>
                    <td>
                        <RouterLink :to="{ path: `students/${book.id}/edit` }" class="btn btn-success float-end">
                            Editar
                        </RouterLink>
                        <button type="button" class="btn btn-danger float end">
                            Excluir
                        </button>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="7">Loading...</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
import axios from 'axios'
import { RouterLink } from 'vue-router'

export default {
    name: "books",
    //atributos
    data() {
        return {
            books: []
        };
    },
    //executa oq eu quero na hora que é redenrizado(carregado), como um gatilho
    mounted() {
        this.getBooks();
        console.log("rodou");
    },
    methods: {
        getBooks() {
            axios.get('http://localhost:8000/api/author').then(res => {
                this.books = res.data;
                //jogando os dados dentro da lista
            });
        }
    },
    components: { RouterLink }
}
</script>