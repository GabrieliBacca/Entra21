const pacote = require('prompt-sync')
const prompt = pacote()

let num1 = Number(prompt("Digite o valor do primeiro número: "))
let num2 = Number(prompt("Digite o valor do segundo número: "))
let num3 = Number(prompt("Digite o valor do terceiro número: "))
let aux = num1;

if(num2>num1){
    aux=num2
    num2=num1
    num1=aux
}
if(num3>num1){
    aux=num3
    num3=num1
    num1=aux
}
if(num3>num2){
    aux=num3
    num2=num3
    num2=aux
}

 console.log(`Ordem descrescente ${num1} - ${num2} - ${num3}`)