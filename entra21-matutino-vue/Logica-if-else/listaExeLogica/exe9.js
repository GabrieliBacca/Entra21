/*Faça um programa que solicite ao usuário um número inteiro e exiba
o resultado da multiplicação desse número por 3.*/

const r = require('prompt-sync')
const prompt = r()

let num = Number(prompt("Digite um numero: "))

console.log(`Resuldado de multiplicação de ${num} por 3 é ` + num * 3 )