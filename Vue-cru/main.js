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
            ]
        }
    },
    methods: {
        changeTitle($title) {
            this.title = $title
        },
        handleEvent() {
            console.log('envente')
        }
    }
})
app.mount('#app')

