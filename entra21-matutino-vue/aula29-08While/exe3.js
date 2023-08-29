const pacote = require('prompt-sync')
const prompt = pacote()

let num = Number(prompt("Digite um número: "))
let i = 0

while (i<num){ //enquanto i menor que 10
    i++// i reccebe +1
    console.log(i)
}