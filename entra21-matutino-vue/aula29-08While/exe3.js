const pacote = require('prompt-sync')
const prompt = pacote()

let num = Number(prompt("Digite um número: "))
let i = 0

while (i <= num){ 
    console.log(i)
    i++// embaixo, mostra e dps soma, assim mostra o 0
}