/*Classe Carro:
Crie uma classe chamada Carro para modelar informações sobre um carro.
Atributos: Modelo, Cor, Ano, Velocidade Atual
Métodos: acelerar, frear e mostrarVelocidade.
*/

class Carro{
    constructor(modelo, cor, ano, velocidadeAtual){
        this.modelo = modelo
        this.cor = cor
        this.ano = ano;
        this.velocidadeAtual = velocidadeAtual;
    }

    acelerar(){
        return this.velocidadeAtual += 1;
    }

    frear(){
        return this.velocidadeAtual = 0;
    }

    mostrarVelocidade(){
        console.log(this.velocidadeAtual)
    }
}

onix = new Carro('onix', 'preto', 2015, 20)
onix.acelerar()
onix.acelerar()
onix.mostrarVelocidade()
onix.frear()
onix.mostrarVelocidade()

