/*Classe Massa Corporal: 
O IMC – Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma 
indicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / (altura):
Elabore uma classe que leia o peso e a altura de um adulto e mostre sua condição de acordo 
com a tabela abaixo.
IMC em adultos Condição
-Abaixo de 18,5 Abaixo do peso
-Entre 18,5 e 25 Peso normal
-Entre 25 e 30 Acima do peso
-Acima de 30 obeso 
*/

class Imc{
    constructor(peso, altura){
        this.peso = peso;
        this.altura = altura;
    }

    calculoImc(){
        return this.peso / this.altura**2
    }

    mostrarCondicao(){
        if (this.calculoImc() < 18.5){
            console.log('Abaixo do peso')
        }

        else if(this.calculoImc() < 25){
            console.log('Peso Normal')
        }

        else if(this.calculoImc() < 30){
            console.log('Acima do Peso')
        }

        else{
            console.log('Obeso')
        }
    }
}

let thyago = new Imc(54,1.63)
let gabi = new Imc(65, 1.65)
gabi.mostrarCondicao()
thyago.mostrarCondicao()
