const prompt = require('prompt-sync')()

// Faça um programa que peça ao usuário para digitar dois números 
// e imprima todos os números entre eles usando um loop while.

let num1 = Number(prompt('Digite um número inicial: '))
let num2 = Number(prompt('Digite um número final: '))

let inicial, final

if(num1 < num2){
   inicial = num1
   final = num2
}else if(num2 < num1){
    inicial = num2
    final = num1
}else{
    console.log('Os números são iguais')
}

inicial++
while(inicial < final)
{
    console.log(inicial)
    inicial++
}