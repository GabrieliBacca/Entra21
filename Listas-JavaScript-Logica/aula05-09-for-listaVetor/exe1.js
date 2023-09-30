/*1. Faça um programa que lê 10 números inteiros do teclado e armazene em um vetor. Ao final imprima o vetor armazenado
*/

prompt = require('prompt-sync') ()

let num = []

for(let i=0; i<10; i++){
    num[i]=prompt(`Digite o ${i+1} numero: `)
}

for(let i=0; i<num.length; i++){
    console.log(num[i])
}