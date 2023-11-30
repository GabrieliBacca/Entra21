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
}

let triangulo1 = new Triangulo(5,6,3)
triangulo1.retornarLados()
triangulo1.mudarLados(9,87,6)
triangulo1.retornarLados()
