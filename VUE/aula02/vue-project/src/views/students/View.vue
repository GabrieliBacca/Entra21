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

            <tbody v-if="this.students.length > 0">
                <tr v-for="(student, index) in this.students" :key="index">
                    <td>{{ student.id }} </td>
                    <td>{{ student.name }} </td>
                    <td>{{ student.username }} </td>
                    <td>{{ student.email }} </td>
                    <td>
                        <RouterLink to="/students/update" class="btn btn-success float-end">
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
    name: "students",
    //atributos
    data() {
        return {
            students: []
        };
    },
    //executa oq eu quero na hora que é redenrizado(carregado), como um gatilho
    mounted() {
        this.getStudents();
        console.log("rodou");
    },
    methods: {
        getStudents() {
            axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
                this.students = res.data;
                //jogando os dados dentro da lista
            });
        }
    },
    components: { RouterLink }
}
</script>