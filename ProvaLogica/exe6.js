prompt = require('prompt-sync') ()

let num = Number(prompt("Digite um número: "))
let i = 0

while(i < 10){
    i++
    console.log(`${num} * ${i} = ${i*num}`)
}