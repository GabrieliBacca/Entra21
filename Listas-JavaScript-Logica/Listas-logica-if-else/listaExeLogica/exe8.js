/*Escreva um programa que peça ao usuário dois números reais e
exiba o resultado da multiplicação dos dois.*/

const r = require('prompt-sync')
const prompt = r()

let num1 = Number(prompt("Digite o primeiro numero: "))
let num2 = Number(prompt("Digite o sgeundo número: "))

console.log(`Resuldado de multiplicação de ${num1} por ${num2} é ` + num1*num2)