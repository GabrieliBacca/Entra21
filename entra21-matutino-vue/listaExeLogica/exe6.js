/*Escreva um programa que peça ao usuário dois números inteiros e
exiba o resultado da divisão do primeiro número pelo segundo.*/

const pacote = require('prompt-sync')
const prompt = pacote()

let num1 = Number(prompt("Digite o o dividendo: "))
let num2 = Number(prompt("Digite o o divisor: "))

console.log(`Resultado da divisão de ${num1} por ${num2} é: ` + (num1/num2))