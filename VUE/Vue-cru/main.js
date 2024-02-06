const app = Vue.createApp({
    data() {
        return {
            showBooks: false,
            title: "Procurando Dev",
            author: "Mario",
            idade: 9,
            books: [
                { title: "Procurando Harry", author: "LK" },
                { title: "Procurando percy", author: "JK" },
            ],
            num1: 0,
            num2: 0,
            resultado: 0
        }
    },
    methods: {
        changeTitle($title) {
            this.title = $title
        },
        handleEvent() {
            console.log('envente')
        },
        somar(){
            this.resultado = parseFloat(this.num1) + parseFloat(this.num2);
            console.log(this.resultado)
        }
    }
})
app.mount('#app')

