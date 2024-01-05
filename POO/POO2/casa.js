/*Classe Casa:
Crie uma classe chamada Casa para modelar informações sobre uma casa.
Atributos: Endereço, Número de Quartos, Área, Valor
Métodos: exibirDetalhes e calcularValorImposto. */
class Casa{
    constructor(endereco,numQuartos,area,valor){
        this.endereco = endereco,
        this.numQuartos = numQuartos,
        this.area = area,
        this.valor = valor
    }

    exibirDetalhes(){
        casa = [this.endereco, this.numQuartos,this.area, this.valor]
        alert(casa)
    }

    calculoImposto(renda, aliquota){
        return renda * aliquota;
    }
}

endereco = prompt('Endereço: ')
numQuartos = Number(prompt('Numero de Quartos: '))
area = Number(prompt('Area: '))
valor = Number(prompt('Valor: '))

casa = new Casa(endereco,numQuartos,area,valor)
while(true){
    let menu = prompt('1- Exibir Detalhes  2- Calcular Imposto')
    if(menu=='1') casa.exibirDetalhes()
    if(menu=='2') {
        let renda = Number(prompt('Renda'))
        let aliquota = Number(prompt('Aliquota: '))
        alert(casa.calculoImposto(renda, aliquota))
    }    
    else break
}