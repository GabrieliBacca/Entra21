/*Escreva um programa que peça ao usuário um número e imprima o
resultado da multiplicação desse número por 10.*/

const pacote = require('prompt-sync')
const prompt = pacote()

let num1 = Number (prompt("Digite um numero: "))

console.log(`Resultado da multiplicação de ${num1} por 10: ` +(num1 *10))
