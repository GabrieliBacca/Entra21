prompt = require('prompt-sync') ()

let nomes = []
let encontrou = 0

for(let i=0; i<5;i++){
    nomes[i] = prompt(`Digite o ${i+1} nome: `)
}

let opcao = prompt("Digite uma pessoa: ")

for(let i=0;i<nomes.length;i++){
    if(nomes[i]==opcao){
        encontrou=true
        break
    }
}

if(encontrou == true ){
    console.log("achei")
}else{
    console.log("nao achei")
}