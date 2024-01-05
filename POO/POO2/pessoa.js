/*Classe Pessoa:
Crie uma classe chamada Pessoa para modelar informações sobre uma pessoa.
Atributos: Nome, Idade, Altura, Peso
Métodos: envelhecer, engordar, emagrecer e mostrarInformacoes.
*/

class Pessoa{
    constructor(nome, idade, altura, peso){
        this.nome = nome,
        this.idade = idade,
        this.altura = altura,
        this.peso = peso;
    }

    envelhecer(){
        return this.idade += 1
    }

    engordar(){
        return this.peso += 1
    }

    emagrecer(){
        return this.peso -=1
    }

    mostrarInfo(){
        let info = [this.nome, this.idade, this.altura, this.peso]
        alert(info);
    }
}

// let gabi = new Pessoa('gabis', 18, 1.65, 65)
// console.log(gabi.mostrarInfo())

// fluxo
let nome = prompt('nome: ')
let idade = Number(prompt('idade: '))
let altura = Number(prompt('altura: '))
let peso = Number(prompt('peso: '))
let p = new Pessoa (nome, idade, altura, peso)

while(true){
    let menu = prompt('1- Envelhecer 2-Engordar 3-Emagrecer 4-Mostrar Informarções')

    if(menu=='1') p.envelhecer()
    else if(menu=='2') p.engordar()
    else if(menu=='3') p.emagrecer()
    else if(menu=='4') p.mostrarInfo()
    else break;

}