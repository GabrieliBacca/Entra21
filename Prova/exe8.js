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
