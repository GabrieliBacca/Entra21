
import { RouterLink } from 'vue-router';
<template>
    <div>
        <div class="card">

            <div class="card-header">
                <h4>
                    Students
                </h4>
                <RouterLink to="/students/create" class="btn btn-primary float-end">
                    Novo estudante
                </RouterLink>
            </div>

            <div class="card-body">
                <table class="table table-bordered">

                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>Email</th>
                        </tr>
                    </thead>

                    <tbody v-if="this.books.length > 0">
                        <tr v-for="(book, index) in this.books " :key="index">
                            <td>{{ book.id }}</td>
                            <td>{{ book.title }}</td>
                            <td>{{ book.isFiction }}</td>
                            <td>{{ book.datePublished }}</td>
                            <td>
                                <RouterLink :to="{ path: `students/${book.id}/edit` }" class="btn btn-success float-end">
                                    Editar
                                </RouterLink>
                                <button type="button" class="btn btn-danger float end" @click="deleteBook(book.id)">
                                    Excluir
                                </button>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="7">Carregando...</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: "books",
    data() {
        return {
            books: []
        }
    },
    mounted() {

        this.getBooks()

    },
    methods: {
        getBooks() {
            axios.get('http://localhost:8000/api/book').then(res => {
                this.books = res.data
            })

        },
        deleteBook(id) {
            axios.delete(`http://localhost:8000/api/book/${id}`).then(res => {
                console.log(res)
            })
                .then(res => this.getBooks())

        }
    }
}
</script>