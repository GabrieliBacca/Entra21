prompt = require('prompt-sync') ()

const num = 2

let palpite = Number(prompt("Digite seu palpite para o número secreto: "))

while(palpite != num){
    console.log(palpite > num ? "Seu palpite é maior que o número sorteado" 
    : "Seu palpite é menor que o número sorteado")
    palpite = Number(prompt("Digite seu palpite para o número secreto: "))
}

console.log("Parabéns! Você acertou o número! ")