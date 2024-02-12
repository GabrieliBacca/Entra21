<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h1>Add Students</h1>
            </div>

            <div class="class-body">

                <div class="mb-3">
                    <label for="">Title</label>
                    <input type="text" class="form-control" v-model="model.book.title">
                </div>

                <div class="mb-3">
                    <label for="">É ficção?</label>
                    <input type="checkbox" v-model="model.book.isFiction">
                </div>


                <div class="mb-3">
                    <label for="">Data publicação</label>
                    <input type="date" class="form-control" v-model="model.book.datePublished">
                </div>


                <div class="mb-3">
                    <label for="">Autor</label>
                    <select v-model="model.book.author" class="form-control">
                        <option :value="author.id" v-for="author in this.authors">
                            {{ author.firsName + " " + author.lastName }}
                        </option>
                    </select>
                </div>
                <div class="mb-3">
                    <button class="btn btn-primary" type="button">Cadastrar</button>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            authors: [],
            model: {
                book: {
                    title: "",
                    isFiction: true,
                    datePublished: "",
                    authorId: 0
                }
            }
        }
    },
    methods: {
        getAuthors() {
            axios.get('http://localhost:8000/api/author').then(res => {
                this.authors = res.data
            })
        },
        saveBook() {
            axios.post('http://localhost:8000/api/book', this.model.book).then(res => {
                console.log(res)
                alert(res.data.message)
            })
        }
    },
    mounted() {
        this.getAuthors();
    }
}
</script>

<style lang="scss" scoped></style>