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

            <tbody>
                <tr v-for="student in students">
                    <td>{{ student.id }} </td>
                    <td>{{ student.name }} </td>
                    <td>{{ student.username }} </td>
                    <td>{{ student.email }} </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: "students",
    data() {
        return {
            students: []
        }
    },
    mounted() {
        this.getStudents()
        console.log("rodou")
    },
    methods: {
        getStudents() {
            axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
                this.students = res.data
            })
        }
    }
}
</script>