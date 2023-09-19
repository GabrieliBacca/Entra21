let req = require('prompt-sync')
let prompt = req()
// 21.	Faça um Programa para um caixa eletrônico. 
// O programa deverá perguntar ao usuário a valor 
// do saque e depois informar quantas notas de cada 
// valor serão fornecidas. As notas disponíveis 
// serão as de 1, 5, 10, 50 e 100 reais. 
// O valor mínimo é de 10 reais e o máximo de 600 reais. 
// O programa não deve se preocupar com a quantidade 
// de notas existentes na máquina.
// 	Exemplo 1: Para sacar a quantia de 256 reais, 
//     o programa fornece duas notas de 100, uma nota de 50, 
//     uma nota de 5 e uma nota de 1;
// 	Exemplo 2: Para sacar a quantia de 399 reais, 
//     o programa fornece três notas de 100, uma nota de 50, 
//     quatro notas de 10, uma nota de 5 e quatro notas de 1.

console.log('Bem vindo ao ByteBank - Saque 24hrs')
const valorDeSaque = parseInt(prompt('Digite o valor a ser sacado'))

if(valorDeSaque < 10 || valorDeSaque > 600){
    console.log('Valor de saque inválido')
}else{
    let notas100 = Math.floor(valorDeSaque/100)
    let resto = valorDeSaque % 100

    let notas50 = Math.floor(resto/50)
    resto = resto % 50

    let notas10 = Math.floor(resto/10)
    resto = resto % 10

    let notas5 = Math.floor(resto/5)
    let notas1 = resto % 5

    console.log(`Para sacar R$${valorDeSaque}`)

    if(notas100 > 0) console.log(`${notas100} de R$100,00` )
    if(notas50> 0) console.log(`${notas50} de R$50,00` )
    if(notas10 > 0) console.log(`${notas10} de R$10,00` )
    if(notas5 > 0) console.log(`${notas5} de R$5,00` )
    if(notas1 > 0) console.log(`${notas1} de R$1,00` )


    

}

