prompt = require('prompt-sync') ()
/*
let i= 0
let num = []
let soma = 0

let aux = Number(prompt("Digite quantos números seram digitados: "))

while(i<aux){
    num[i] = Number(prompt(`Digite o ${i+1} numero: `))
    soma += num[i];
    i++
}

let media = soma /num.length
console.log(`A média do numeros é ${media}`)*/

let num = []
let soma = 0

let quantidade = Number(prompt("Quantos números você quer digitar: "))

for(let i = 0; i< quantidade; i++){ //numero definido de vezes, while para looginp que pode ser infinito
    num = Number(prompt("Digite um numero: "))
    soma += num
}

console.log(soma/quantidade)