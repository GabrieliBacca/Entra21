const pacote = require('prompt-sync')
const prompt = pacote()

let altura = Number (prompt("Digite a altura do retangulo: "))
let base = Number (prompt("Digite a base do retanulo: "))

console.log("Area: " + (base*altura))