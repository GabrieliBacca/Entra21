const pacote = require('prompt-sync')
const prompt = pacote()

let number = Number(prompt("Digite um numero: "))

if(numero == 1){
    console.log('Domingo')
}else if(numero==2){
    console.log("Segunda")
}else if(numero==3){
    console.log("Terça")
}else if(numero==4){
    console.log("Quarta")
}else if(numero==5){
    console.log("Quinta")
}