/*Classe Carro:
Crie uma classe chamada Carro para modelar informações sobre um carro.
Atributos: Modelo, Cor, Ano, Velocidade Atual
Métodos: acelerar, frear e mostrarVelocidade.
*/

class Carro{
    constructor(modelo, cor, ano){
        this.modelo = modelo
        this.cor = cor
        this.ano = ano;
        this.velocidadeAtual = 0;
    }

    acelerar(){
        return this.velocidadeAtual += 1;
    }

    frear(){
        if(this.velocidadeAtual >=1){
            this.velocidadeAtual -=1
        }
    }

    mostrarVelocidade(){
       alert(this.velocidadeAtual);
    }
}

onix = new Carro('onix', 'preto', 2015)
onix.acelerar()
onix.acelerar()
onix.mostrarVelocidade()
onix.frear()
onix.mostrarVelocidade()

// fluxo


let c = new Carro('Jetta', 'Branco',2019)
while(true){
    let menu = prompt('1- Acelerar 2-Frear 3-Velocidade 4-Sair')

    if(menu== '1') c.acelerar()
    else if(menu=='2') c.frear()
    else if(menu=='3') c.mostrarVelocidade()
    else break;

}