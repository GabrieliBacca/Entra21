prompt = require('prompt-sync') ()

let num = Number(prompt("Digite um número: "))

console.log(num >= 0 ? "positivo" : "negativo")
console.log(num % 2 == 0 ? "par" : "ímpar")