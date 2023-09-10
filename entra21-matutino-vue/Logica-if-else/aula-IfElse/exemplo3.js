// Se altura acima de 3m, informar que a pessoa é um gigante

const pacote = require('prompt-sync')
const prompt = pacote()

let altura = Number(prompt("Digite sua altura: "))

if(altura >=3){
    console.log("Você é um gigante")
}else{
    console.log("Você é normal")
}