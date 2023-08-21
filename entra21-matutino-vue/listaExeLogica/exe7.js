/*Faça um programa que solicite ao usuário um número e calcule e
exiba o quadrado desse número.*/
const pacote = require('prompt-sync')
const prompt = pacote()

let num = Number(prompt("Digite um numero: "))

console.log(`O número ${num} ao quadrado é: ` + Math.pow(num,2))