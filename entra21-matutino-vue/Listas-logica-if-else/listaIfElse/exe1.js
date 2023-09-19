const pacote = require('prompt-sync')
const prompt = pacote()

let num1 = Number(prompt("Digite um numero: "))
let num2 = Number(prompt("Digite outro numero: "))

if(num1 > num2){
    console.log(`O numero ${num1} é maior`)
} else if(num2 > num1){
    console.log(`O numero ${num2} é maior`)
}