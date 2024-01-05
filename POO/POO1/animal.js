/*Classe Animal:
Crie uma classe chamada Animal para modelar informações sobre um animal.
Atributos: Nome, Espécie, Idade
Métodos: emitirSom para representar o som que o animal faz e Envelhecer.*/

class Animal{
    constructor(nome,especie,idade){
        this.nome = nome; 
        this.especie = especie;
        this.idade = idade;
    }

    emitirSom(){
        let sons = ['miau miau', 'miauuuuuuu', 'prrrr']
        let index = Math.round(Math.random() * (sons.length-1))
        alert(sons[index])
    }

    envelhecer(){
        return this.idade +=1;
    }
}


gato = new Animal('gato', 'felino', 5)
console.log(gato.emitirSom())
gato.envelhecer()
console.log(gato.idade)