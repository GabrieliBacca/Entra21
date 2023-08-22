const pacote = require('prompt-sync')
const prompt = pacote()

let altura = Number (prompt("Digite a altura do retangulo: "))
let base = Number (prompt("Digite a base do retangulo: "))

console.log(`A area do retângulo é ` + (base*altura))