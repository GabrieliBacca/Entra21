const pacote = require('prompt-sync')
const prompt = pacote()

let contador =0
while(contador != 9){
    contador = prompt("Digite 9 para parar: ")
}