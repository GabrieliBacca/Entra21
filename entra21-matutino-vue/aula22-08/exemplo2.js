//verificar se dois numeros são iguais
const pacote = require('prompt-sync')
const prompt = pacote()

let num1 = Number(prompt("Digite o primeiro número: "))
let num2 = Number(prompt("Digite o segundo número: "))

if(num1==num2){
    console.log("Os numeros são iguais")
}else{
    console.log("Os numeros são diferentes")
}

