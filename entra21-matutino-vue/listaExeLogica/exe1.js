/*Faça um programa que solicite ao usuário dois números inteiros e
exiba a soma dos dois.*/

const pacote = require('prompt-sync')
const prompt = pacote()

let num1 = Number (prompt("Digite o primeiro numero: "))
let num2 = Number (prompt("Digite o segundo numero: "))

console.log("Soma: " +(num1 + num2))
