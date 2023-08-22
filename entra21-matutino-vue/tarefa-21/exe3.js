const pacote = require('prompt-sync')
const prompt = pacote()

let r = Number (prompt("Digite o raio do ciculo: "))

console.log("Area: " +(r*2*Math.PI))
