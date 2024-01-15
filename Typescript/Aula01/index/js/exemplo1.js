"use strict";
let usuario = {
    id: 1,
    nome: 'Gabis',
    idade: 18
};
let usuario2 = {
    id: 1,
    nome: 'Thygas',
    idade: 16
};
function mostrarPessoa(user) {
    console.log(user);
}
mostrarPessoa(usuario);
function somar(num1, num2) {
    return num1 + num2;
}
console.log(somar(2, 9));
function verificarNumero(num) {
    if (Number(num))
        return num;
    else
        return 'Nao é numero';
}
console.log(verificarNumero('gabis'));
// Exercicio criar uma funcao que receba por parametros os atributos de um circulo e retorne sua area
function areaCirculo(raio) {
    return (raio * raio * Math.PI).toFixed(2) + ' m²';
}
console.log(areaCirculo(3));
