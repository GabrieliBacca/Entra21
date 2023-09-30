const pacote = require('prompt-sync')
const prompt = pacote()

// numero de 1 a 5 e informe por extenso

let num = Number(prompt("Digite um número: "))

switch(num){
    case 1:
        console.log("um")
        break
    case 2: 
        console.log("dois")   
        break 
    case 3:
        console.log("tres")
        break
    case 4:
        console.log("quatro") 
        break
    case 5:
        console.log("cinco")
        break
    default:
        console.log("Entrada inválida")
        break              
}