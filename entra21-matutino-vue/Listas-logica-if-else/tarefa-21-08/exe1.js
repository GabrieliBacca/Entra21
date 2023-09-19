const pacote = require('prompt-sync')
const prompt = pacote()

let largura = Number (prompt("Digite o lado do quadrado: "))

console.log("Area do quadrado: " +Math.pow(largura,2))
