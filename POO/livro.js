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
        console.log(this.titulo, this.autor, this.ano, this.genero, this.reservado)
    }

    reservar(){
        this.reservado = true;
    }
}

pequenoPrincipe = new Livro("Pequeno Principe", "Lewis", 1942, "Fantasia", false)
pequenoPrincipe.mostrarDetalhes()
pequenoPrincipe.reservar()
pequenoPrincipe.mostrarDetalhes()
