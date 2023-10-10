/*Faça um programa que peça para as pessoas a sua idade, ao final o programa deverá verificar se a 
média de idade da turma varia entre 0 e 25,26 e 60 e maior que 60; e então, dizer se a turma é jovem, adulta ou idosa, conforme a média calculada.
*/

prompt = require('prompt-sync') ()
let qtd = Number(prompt('Quantas pessoas vão participar da pesquisa: '))
let soma = 0

for(i=0; i<qtd; i++){
    let idade = Number(prompt(`Digite a ${i+1} idade:`))
    soma+=idade
}
let media = soma/qtd

if(media<25){
    console.log("jovem")
}else if(media<60){
    console.log("adulta")
}else{
    console.log("idosa")
}