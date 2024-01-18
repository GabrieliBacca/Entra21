"use strict";
// 1) Crie uma função em TypeScript que receba dois parâmetros, ambos números, e retorne a soma desses números.
function somar(num1, num2) {
    return num1 + num2;
}
console.log(`Soma é igual: ${somar(2, 6)}`);
// 2) Crie uma função que aceite um parâmetro que pode ser do tipo string ou number. 
// Se o parâmetro for uma string, retorne a string concatenada com " - texto". 
// Se for um número, retorne o dobro desse número.
function verificarNumero(num) {
    if (typeof num == 'string')
        return num + '-texto';
    else
        return num * 2;
}
console.log(verificarNumero(5));
// 3) Crie uma função chamada somaArray que aceite um array de números e retorne a soma deles.
let soma = 0;
function somaArray(array) {
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return `The sum of the numbers is ${soma}`;
}
// UTILIZANDO FOREACH
function somaArray2(array) {
    let soma = 0;
    array.forEach(num => soma += num);
    return soma;
}
let numbers = [1, 2, 3];
console.log(somaArray(numbers));
function imprimirFrutas(fruta) {
    for (let i = 0; i < fruta.length; i++) {
        console.log(fruta[i].nome);
    }
}
let arrayFrutas = [
    { nome: 'maca' }, { nome: 'caqui', }, { nome: 'banana' }
];
imprimirFrutas(arrayFrutas);
// 5) Declare um enum chamado DiasDaSemana com os dias da semana como membros.
// Crie uma função que aceite um parâmetro do tipo DiasDaSemana e retorne uma mensagem relacionada ao dia.
var DiasDaSemana;
(function (DiasDaSemana) {
    DiasDaSemana["Segunda"] = "Boa Segunda guys";
    DiasDaSemana["Terca"] = "Ter\u00E7a rapazes";
    DiasDaSemana["Quarta"] = "It's Wenesdayy";
    DiasDaSemana["Quinta"] = "Happy day";
    DiasDaSemana["Sexta"] = "Sextou rapazes";
    DiasDaSemana["Sabadou"] = "Sabadou, dia de capota o corsa";
    DiasDaSemana["Domingo"] = "Domingold";
})(DiasDaSemana || (DiasDaSemana = {}));
function daysOfWeek(dia) {
    console.log(dia);
}
daysOfWeek(DiasDaSemana.Segunda);
function atualizarAnoVeiculos(veiculo, novoAno) {
    veiculo.ano = novoAno;
}
const meuCarro = {
    nome: 'Carro Legal',
    ano: 2020
};
atualizarAnoVeiculos(meuCarro, 2022);
console.log(meuCarro);
let registeredUser = {
    user: 'Gabi',
    password: '1234'
};
function verificarUsuario(user, password) {
    if (user == registeredUser.user && registeredUser.password == password)
        return true;
    return false;
}
console.log(verificarUsuario('Gabi', '65'));
function calcularTotal(produtos) {
    let valorTotal = 0;
    for (let i = 0; i < produtos.length; i++) {
        valorTotal += produtos[i].preco * produtos[i].quantidade;
    }
    return valorTotal;
}
const produtos = [
    { nome: 'Banana', preco: 10, quantidade: 2 },
    { nome: 'Calça', preco: 5, quantidade: 3 },
    { nome: 'Garrafa', preco: 8, quantidade: 1 }
];
console.log('Valor total da compra:', calcularTotal(produtos));
