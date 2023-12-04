/*Classe Triângulo:
Crie uma classe chamada Triangulo que modele um triângulo.
Atributos: LadoA, LadoB, LadoC
Métodos: mudarLados, retornarLados, calcularArea e verificarTriangulo 
(para verificar se é um triângulo válido).
*/

class Triangulo{
    constructor(ladoA,ladoB, ladoC){
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }


    mudarLados(ladoA,ladoB,ladoC){
        return this.ladoA = ladoA, this.ladoB = ladoB, this.ladoC = ladoC
    }

    retornarLados(){
        console.log(`Lado A: ${this.ladoA} Lado B: ${this.ladoB} Lado C: ${this.ladoC}`)
    }

    calcularArea(){
        return (this.ladoA * this.ladoB) / 2;
    }

    verificarTriangulo(){
        if(this.ladoA > this.ladoB + this.ladoC || this.ladoB > this.ladoA + this.ladoC || this.ladoC > this.ladoA + this.ladoB){
            console.log('É um triangulo')
        }else{
            console.log('Não é um Tringulo')
        }
    }
}

let triangulo1 = new Triangulo(5,6,3)
triangulo1.retornarLados()
triangulo1.mudarLados(1,5,19)
triangulo1.retornarLados()
console.log(triangulo1.calcularArea())
triangulo1.verificarTriangulo()
