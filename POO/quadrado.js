/*Classe Quadrado: Crie uma classe que modele um quadrado:
Atributos: Tamanho do lado
Métodos: Mudar valor do Lado, Retornar valor do Lado e calcular Área;*/

class Quadrado{
    constructor(lado){
        this.lado = lado;
    }

    mudarValorLado(lado){
        this.lado = lado;
    }

    retornarLado(){
        console.log(`Valor do lado: ${this.lado}`)
    }

    calcularArea(){
        return  console.log(`Area : ${this.lado * this.lado}`);
    }
}

let quadrado1 = new Quadrado(5)

quadrado1.retornarLado()
quadrado1.mudarValorLado(3)
quadrado1.calcularArea()