/*Classe Casa:
Crie uma classe chamada Casa para modelar informações sobre uma casa.
Atributos: Endereço, Número de Quartos, Área, Valor
Métodos: exibirDetalhes e calcularValorImposto.
*/
class Casa{
    constructor(endereco,numQuartos,area,valor){
        this.endereco = endereco,
        this.numQuartos = numQuartos,
        this.area = area,
        this.valor = valor
    }

    exibirDetalhes(){
        casa = [this.endereco, this.numQuartos,this.area, this.valor]
    }
}