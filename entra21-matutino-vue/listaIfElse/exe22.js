const pacote = require('prompt-sync')
const prompt = pacote()

let num = Number(prompt("Informe um número: "))

if(num%2 == 0 ){
    console.log(`O número ${num} é par`)
}else{
    console.log(`O npumero ${num} é impar`)
}