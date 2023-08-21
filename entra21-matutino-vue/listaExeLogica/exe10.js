/*Escreva um programa que peça ao usuário dois números
inteiros e exiba o resultado da subtração do primeiro número pelo
segundo.*/

const r = require('prompt-sync')
const prompt = r()

let num1 = Number(prompt("Digite o primeiro numero: "))
let num2 = Number(prompt("Digite o segundo numero: "))

console.log(`Resultado da subtração de ${num1} - ${num2} é: ` + (num1-num2))