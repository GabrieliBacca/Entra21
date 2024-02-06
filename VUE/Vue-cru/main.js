const app = Vue.createApp({
    data() {
        return {
            url: 'https://google.com',
            showBooks: false,
            title: "Procurando Dev",
            author: "Mario",
            idade: 9,
            books: [
                { title: "Procurando Harry", author: "LK", img: 'img/gato1.jpg', isFav: false },
                { title: "Procurando percy", author: "JK", img: 'img/gato2.jpg', isFav: false },
                { title: "Procurando Dev", author: "KK", img: 'img/gato3.jpg', isFav: true },
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
        somar() {
            this.resultado = parseFloat(this.num1) + parseFloat(this.num2);
            console.log(this.resultado)
        },
        favoritar(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter(book => book.isFav)
        }
    }
})
app.mount('#app')

