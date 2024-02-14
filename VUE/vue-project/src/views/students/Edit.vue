<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h1>Edit Book: {{ this.model.book.title }}</h1>
            </div>
            <div class="card-body">

                <div class="mb-3">
                    <label for="">Title</label>
                    <input type="text" v-model="model.book.title" class="form-control">
                </div>

                <div class="mb-3">
                    <label for="">É ficção?</label>
                    <input type="checkbox" v-model="model.book.isFiction">
                </div>

                <div class="mb-3">
                    <label for="">Data de Publicação</label>
                    <input type="datetime-local" class="form-control" v-model="model.book.datePublished">
                </div>

                <div class="mb-3">
                    <label for="">Autor</label>
                    <select class="form-control" v-model="model.book.authorId">
                        <option>
                            {{ this.model.author.firstName + " " + this.model.author.lastName }}
                        </option>
                    </select>
                </div>
                <div class="mb-3">
                    <button type="button" @click="saveBook()" class="btn btn-primary">Atualizar</button>
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
            model: {
                book: {
                    title: "",
                    isFiction: true,
                    datePublished: "",
                    authorId: 0
                },
                author: {
                    firstName: "",
                    lastName: ""
                }
            }
        }
    },
    mounted() {
        console.log(this.$route.params.id)
        this.getBook()
    },
    methods: {
        updateBook() {
            axios.put()
        },
        getBook() {
            let id = this.$route.params.id
            axios.get('http://localhost:8000/api/book/' + id).then(res => {
                this.model.book = res.data
                this.model.author = res.data.author
            })
        }
    },
}
</script>

<style lang="scss" scoped></style>