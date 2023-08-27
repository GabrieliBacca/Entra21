let req = require('prompt-sync')
let prompt = req()

// 24.	Faça um Programa que leia 2 números e em seguida pergunte 
// ao usuário qual operação ele deseja realizar. 
// O resultado da operação deve ser acompanhado de uma frase que diga se o número é:
// 	par ou ímpar;
// 	positivo ou negativo;
// 	inteiro ou decimal.

let n1 = Number(prompt('Digite o 1º número\n'))
let n2 = Number(prompt('Digite o 2º número\n'))

let operacao = prompt('[+]-Soma [-]-Subtração [*]-Mupltiplicação [/]-Divisão\n')
let flag = true
let resultado = 0
switch(operacao){
    case '+':
        resultado = n1+n2
        break;        
    case '-':
       resultado = n1-n2
       break;
    case '*':
       resultado = n1*n2
       break;
    case '/':
        resultado = n1/n2
        break;
    default:
        console.log('Operacao Inválida!')   
        flag = false   
}
if(flag){
    console.log(`${n1} ${operacao} ${n2} = ${resultado}`)
    console.log(resultado % 2 == 0 ? 'par' : 'ímpar')
    console.log(resultado < 0 ? 'negativo' : 'positvo')
}