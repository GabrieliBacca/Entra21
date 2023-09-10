const pacote = require('prompt-sync')
const prompt = pacote()


let votosCandidatoA = 200
let votosCandidatoB = 180

if(votosCandidatoA > votosCandidatoB){
    console.log('candidato A ganhou')
}else if(votosCandidatoB > votosCandidatoA){
    console.log("candidato B ganhou")
}else{
    console.log("A votação terminou em empate")
}