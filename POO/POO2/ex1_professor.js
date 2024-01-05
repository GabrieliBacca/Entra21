// Classe Pessoa:
// Crie uma classe chamada Pessoa para modelar informações sobre uma pessoa.
// Atributos: Nome, Idade, Altura, Peso
// Métodos: envelhecer, engordar, emagrecer e mostrarInformacoes.

class Pessoa{
    constructor(nome, idade, altura, peso){
        this.nome = nome
        this.idade = idade
        this.altura = altura
        this.peso = peso
    }

    envelhecer(){
        this.idade += 1
    }
    engordar(peso){
        this.peso += peso
    }
    emagrecer(peso){
        if(peso >= this.peso || peso == 0)
            return false
        else
            this.peso -= 1 
    }

    mostrarInformacoes(){
        console.log(`Nome: ${this.nome}\nIdade: ${this.idade}\nPeso: ${this.peso}\nAltura: ${this.altura}`)
    }
 
}

function acessarPessoa(index){
    return pessoas[index-1]
}


let pessoas = []

while(true){
    let menu = prompt('1-Nova pessoa 2-Ver Pessoas 3-Sair')

    if(menu == '1'){
        nome = prompt('NOME:')
        idade = prompt('IDADE:')
        peso = prompt('PESO:')
        altura = prompt('ALTURA:')
        pessoas.push(new Pessoa(nome, idade, peso, altura))
    }else if(menu == 2)
        pessoas.forEach(pessoa  => {
            pessoa.mostrarInformacoes()
        })
    else
        break
}



// while(true){
//     let menu = prompt('1-Cadastrar Nova pessoa  2-Acessar Pessoa 3-Sair')

//     switch(menu){
//         case '1':
//             let nome = 
//     }
// }