/*
prompt = require('prompt-sync') ()
let palavra = 'abacaxi'
let i = 0

let palpite = prompt("Digite a palavra secreta: ")

while(palpite != palavra && i < 5){
    i++
    console.log(`Palpite incorreto!\nRestam ${5-i} tentativas`)
    palpite = prompt("Digite a palavra secreta: ")
    
}
console.log(palpite == palavra ? "Palavra secreta correta!" : "Terminou suas tentativas")
*/

prompt = require('prompt-sync') ()
let palavra = 'abacaxi'

for(let tentativas = 5; tentativas > 0; tentativas--) {
    console.log(`Tentativas restante:  ${tentativas}`)
    if(prompt("Digite uma palavra: ") == palavra){
        console.log("Voce acertou!")
        break
    }
}