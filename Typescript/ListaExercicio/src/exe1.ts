// 1) Crie uma função em TypeScript que receba dois parâmetros, ambos números, e retorne a soma desses números.

function somar(num1: number, num2: number) :number{
    return num1 + num2
}

console.log(`Soma é igual: ${somar(2,6)}`)


// 2) Crie uma função que aceite um parâmetro que pode ser do tipo string ou number. 
// Se o parâmetro for uma string, retorne a string concatenada com " - texto". 
// Se for um número, retorne o dobro desse número.

function verificarNumero(num: string | number) : number | string {
    if(typeof num == 'string') return num + '-texto'
    else return num * 2
}
console.log(verificarNumero(5))


// 3) Crie uma função chamada somaArray que aceite um array de números e retorne a soma deles.

let soma = 0
function somaArray(array: number[] )  : string {
    for(let i=0; i < array.length; i++){
        soma += array[i]
    }
    return `The sum of the numbers is ${soma}`
}

        // UTILIZANDO FOREACH
function somaArray2(array: number[] )  : number {
    let soma: number =0
    array.forEach(num => soma +=num)
    return soma
}

let numbers = [1,2,3]
console.log(somaArray(numbers))


// 4) Crie um type 'frutas', em seguida, Crie uma função chamada imprimirFrutas que aceite um array de frutas e imprima cada uma no console

type frutas = {
    nome: string
}

function imprimirFrutas(fruta : frutas[]) : void {
    for(let i =0; i< fruta.length; i++){
        console.log(fruta[i].nome)
    }
}

let arrayFrutas : frutas[]= [
    {nome: 'maca'}, {nome: 'caqui', }, {nome: 'banana'}
]

imprimirFrutas(arrayFrutas)

// 5) Declare um enum chamado DiasDaSemana com os dias da semana como membros.
// Crie uma função que aceite um parâmetro do tipo DiasDaSemana e retorne uma mensagem relacionada ao dia.

enum DiasDaSemana {
    Segunda = 'Boa Segunda guys',
    Terca = 'Terça rapazes',
    Quarta = `It's Wenesdayy`,
    Quinta = 'Happy day',
    Sexta = 'Sextou rapazes',
    Sabadou = 'Sabadou, dia de capota o corsa',
    Domingo = 'Domingold'

}

function daysOfWeek(dia: DiasDaSemana) {
   console.log(dia)
}
daysOfWeek(DiasDaSemana.Segunda)

// 6) Crie uma função chamada atualizarAnoVeiculos que aceite um objeto do tipo Veiculo e um ano como parâmetro. 
// A função deve retornar um novo veículo com o ano atualizado para o ano fornecido.
type Veiculo = {
    nome: string,
    ano: number
}

function atualizarAnoVeiculos(veiculo: Veiculo, novoAno: number): void {
    veiculo.ano = novoAno
}

const meuCarro: Veiculo = {
    nome: 'Carro Legal',
    ano: 2020
};

atualizarAnoVeiculos(meuCarro, 2022)
console.log(meuCarro)

// 7) Crie uma função chamada verificarUsuario que aceite um objeto do tipo Usuario e uma senha de entrada e verifique se a senha fornecida está correta. 
// A função deve retornar um booleano indicando se a senha está correta.

type Usuario = {
    user: string,
    password: string
}

let registeredUser ={
    user: 'Gabi',
    password: '1234'
}

function verificarUsuario()


// 8) Crie uma função chamada calcularTotal que aceite um array de objetos do tipo Produto e retorne o valor total da compra.
