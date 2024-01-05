/* Classe Bola: Crie uma classe que modele uma bola:
Atributos: Cor, circunferência, material
Métodos: trocaCor e mostraCor
*/
class Bola{
    constructor(cor, circunferencia,material){
        this.cor = cor;
        this.circunferencia = circunferencia;
        this.material = material;
    }

    trocarCor(cor){
        this.cor= cor;
    }

    mostrarCor(){
        console.log(`A cor é ${this.cor}`)
    }
}

let bola1 = new Bola('Rosa',10, 'Tecido');

bola1.mostrarCor();
bola1.trocarCor('azul');
bola1.mostrarCor();
bola1.trocarCor('amarelo');
bola1.mostrarCor();

