/*
Faça um programa que calcule o valor total investido por um colecionador em sua coleção de CDs e o valor médio gasto em cada um deles. 
O usuário deverá informar a quantidade de CDs e o valor para cada um.
*/

prompt = require('prompt-sync') ()

let qtd = Number(prompt("Quantidade de CDs: "))
let valor = 0, total=0

for(let i=0; i<qtd;i++){
    valor = Number(prompt("Informe o valor: "))
    total += valor
}
console.log(`Valor total investido R$ ${total}`)