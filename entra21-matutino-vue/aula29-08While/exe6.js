const prompt = require('prompt-sync') () //funcao de ler em uma forma simplificada 

let nome = prompt("Digite um nome: ")
let i = 0

while(i < nome.length){
    console.log(nome[i])
    i++
}
