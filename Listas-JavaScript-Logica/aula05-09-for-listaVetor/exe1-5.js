/*1.5 Faça um programa para cadastrar 10 nomes. Permita o usuário pesquisar um nome através do índice. 
Ex: O Usuário digita o número 2, e programa mostra o nome cadastrado no índice 2 do vetor.*/

prompt = require('prompt-sync') ()

let nomes = []

for(let i= 0; i < 3; i++){
    nomes[i] = prompt(`Digite o ${i+1} nome: `)
}

let opcao = Number(prompt("Digite o indice do vetor: "))
console.log(nomes[opcao])
