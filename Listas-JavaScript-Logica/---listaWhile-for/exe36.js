prompt  = require('prompt-sync')()

let num = Number(prompt("Mostre a tabuada de: "))
let com = Number(prompt("Começar por: "))
let fim = Number(prompt("Terminar em: "))

for(let i =com; i<=fim; i++){
    console.log(`${num} * ${i} = ${i*num}`)
}