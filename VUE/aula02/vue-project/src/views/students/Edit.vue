<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h1>Edit Students {{ this.model.book.title }}</h1>
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
                    <button @click="saveBook" class="btn btn-primary" type="button">Cadastrar</button>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
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
    mounted() {
        console.log(this.$route.params.id)
    },
}
</script>

<style lang="scss" scoped></style>