prompt = require('prompt-sync') ()

let nomes = []

for(let i= 0; i < 3; i++){
    nomes[i] = prompt(`Digite o ${i+1} nome: `)
}

let opcao = Number(prompt("Digite o indice do vetor: "))
console.log(nomes[opcao])
