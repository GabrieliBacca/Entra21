/*Faça um programa que solicite ao usuário um número real e imprima
a metade desse número.*/
const pacote = require('prompt-sync')
const prompt = pacote()

let num = Number (prompt("Digite um numero: "))

console.log("Metade deste número: " + num/2)
