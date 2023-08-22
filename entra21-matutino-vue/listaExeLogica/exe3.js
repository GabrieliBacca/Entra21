const r = require('prompt-sync')
const prompt = r()

//Faça um programa que peça ao usuário um número e calcule e exiba
// a raiz quadrada desse número.

let num = Number (prompt("Digite um numero: "))
let raiz = Math.sqrt(num)

console.log(`Raiz quadrada de ${num}: ` + raiz)