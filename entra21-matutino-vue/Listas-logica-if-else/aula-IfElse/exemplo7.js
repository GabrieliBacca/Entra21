const pacote = require('prompt-sync')
const prompt = pacote()

let idade = Number(prompt("Entre com sua idade: "))

if(idade <= 13){
    console.log("criança")
}else if(idade <= 21){
    console.log("adolescente")
}else if(idade <=64){
    console.log("adulto")
}else{
    console.log("idoso")
}