/*Escreva um programa que solicite ao usuário o valor de três números
inteiros diferentes e exiba o resultado da soma dos três números.
*/

const pacote = require('prompt-sync')
const prompt = pacote()

let num1 = Number(prompt("Digite o primeiro número: "))
let num2 = Number(prompt("Digite o segundo número: "))
let num3 = Number(prompt("Digite o terceiro número: "))

console.log (`Soma de ${num1} + ${num2} + ${num3}: ` + (num1+num2+num3))
