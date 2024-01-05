/*Classe Filme:
Crie uma classe chamada Filme para modelar informações sobre um filme.
Crie um pequeno sistema de cadastro de livros em uma lista.
Atributos: Título, Diretor, Ano de Lançamento, Gênero, Avaliação
Métodos: remostrarDetalhes.
*/

class Filme {
    constructor(titulo, diretor, ano, genero, avaliacao) {
        this.titulo = titulo,
            this.diretor = diretor,
            this.ano = ano,
            this.genero = genero,
            this.avaliacao = avaliacao;
    }
    exibirDetalhes() {
        let filme = `Título: ${this.titulo}\nDiretor: ${this.diretor}\nAno: ${this.ano}\nGênero: ${this.genero}\nAvaliação: ${this.avaliacao}`;
        return alert(filme)
    }


}

let lista = [];


while (true) {
    let menu = Number(prompt('1- Exibir Detalhes 2 -Sair 3-Novo Filme'))

    if (menu == 1) lista[lista.length -1 ].exibirDetalhes()

    menu = Number(prompt('1- Exibir Detalhes 2 -Sair 3-Novo Filme'))
    if (menu == 3) {

        let titulo = prompt('Titulo: ')
        let diretor = prompt('Diretor: ')
        let ano = prompt('Ano: ')
        let genero = prompt('Genero: ')
        let avaliacao = prompt('Avaliação: ')

        filme = new Filme(titulo, diretor, ano, genero, avaliacao)
        lista.push(filme)

    }
    else break;
}
