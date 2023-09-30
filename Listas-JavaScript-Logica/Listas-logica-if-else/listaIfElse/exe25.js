const pacote =  require('prompt-sync')
const prompt = pacote()

let contadorDeRespostas=0

console.log("Digite 1-Sim 1-Não")
console.log("------------------")
let respostas = prompt("Telefonou para a vítima?")
    if(respostas==1){
        contadorDeRespostas++ //+1
    }
respostas = prompt("Esteve no local do crime?")
    if(respostas==1){
        contadorDeRespostas++ //+1
    }
respostas = prompt("Devia para a vítima?")
    if(respostas==1){
        contadorDeRespostas++ //+1
    }    
respostas = prompt("Mora perto da vítima?")
    if(respostas==1){
        contadorDeRespostas++ //+1
    }    

 if(contadorDeRespostas <=1){

 }   