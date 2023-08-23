//numero positivo
const pacote = require('prompt-sync')
const prompt = pacote()

let num = (Number(prompt("Digite um número: ")))

if(num >= 0){
    console.log(`O número ${num} é positivo`)
}else{
    console.log(`O numero ${num} é negativo`)
}