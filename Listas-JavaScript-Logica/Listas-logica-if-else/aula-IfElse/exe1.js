//volume de um cubo

const pacote = require('prompt-sync')
const prompt = pacote()

let a = Number(prompt("Informe  valor da aresta: "))

console.log(`O volume do cubo com aresta ${a} é ` + Math.pow(a,3))
