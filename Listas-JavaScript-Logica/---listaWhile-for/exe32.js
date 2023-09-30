// // Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.: 5!=5.4.3.2.1=120. 
//A saída deve ser conforme o exemplo abaixo:
// Fatorial de: 5
// 5! =  5 . 4 . 3 . 2 . 1 = 120

prompt = require('prompt-sync')();

let num = Number(prompt("Digite um número: "))
fatorial =1

for(let i=num; i>1;i--){
    fatorial = fatorial *i
}

console.log(fatorial)
