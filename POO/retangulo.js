/*Classe Retangulo: Crie uma classe que modele um retangulo:
Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher)
Métodos: Mudar valor dos lados, Retornar valor dos lados, calcular Área e calcular Perímetro;
Crie um programa que utilize esta classe. Ele deve pedir ao usuário que 
informe as medidades de um local. Depois, deve criar um objeto 
com as medidas e calcular a quantidade de pisos e de rodapés necessárias para o local.
*/

class Retangulo{
    constructor(base,altura){
        this.base = base;
        this.altura = altura;
    }

    mudarValorLados(base,altura){
        this.altura = altura;
        this.base = base;
    }

    mostrarValorLados(){
        console.log(`Base: ${this.base} Altura: ${this.altura}`)
    }

    calcularArea(){
        return console.log(`Area = ${this.base * this.altura}`)
    }

    calcularPerimetro(){
        return console.log(`Perimetro = ${this.base + this.altura}`)
    }

}

retangulo1 = new Retangulo(5, 2)
retangulo1.mostrarValorLados()
retangulo1.mudarValorLados(8,6)
retangulo1.mostrarValorLados()
retangulo1.calcularArea()
retangulo1.calcularPerimetro()
