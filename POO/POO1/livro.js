/*Classe Livro:
Crie uma classe chamada Livro para modelar informações sobre um livro.
Atributos: Título, Autor, Ano de Publicação, Gênero, Reservado
Métodos: mostrarDetalhes para exibir todas as informações do livro e Reservar.
*/

class Livro{
    constructor(titulo, autor, ano, genero, reservado){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.genero = genero;
        this.reservado = reservado;
    }

    mostrarDetalhes(){
        console.log(this)
    }

    reservar(){
        this.reservado = true;
    }
}

pequenoPrincipe = new Livro("Pequeno Principe", "Lewis", 1942, "Fantasia", false)
pequenoPrincipe.mostrarDetalhes()
pequenoPrincipe.reservar()
pequenoPrincipe.mostrarDetalhes()

//fluxo como cadasdrar um livro, mas nao foi finalizado

listaLivros = []
const jsonfile = require('jsonfile')

const data = jsonfile.readFile('dados.json')

while(true){
    let menu = prompt('1- Adicionar um livro, 2- Ver Livros, 3-Sair')

    if(menu == 1){
    let titulo = prompt('Titulo:')
    let autor = prompt('Autor: ')
    let ano = prompt('Ano: ')
    let genero = prompt('Genero: ')

    let livro = new Livro(titulo, autor,ano,genero)
    data.novoDado = livro
    jsonfile.writeFileSync('dados.json', data)
    listaLivros.push(livro)

    }else if(menu == 2 ){
        listaLivros.forEach(livro => console.log(livro.mostrarDetalhes()))

    }else{
        if(confirm('Tem certeza?'))
        break;
    }
}
