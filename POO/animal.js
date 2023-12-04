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

    emitirSom(som){
        console.log(som);
    }

    envelhecer(){
        return this.idade +=1;
    }
}

gato = new Animal('gato', 'felino', 5)
gato.emitirSom('miau')
gato.envelhecer()
console.log(gato.idade)