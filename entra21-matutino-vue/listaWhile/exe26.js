// Numa eleição existem três candidatos. Faça um programa que peça o número total de eleitores. 
// Peça para cada eleitor votar e ao final mostrar o número de votos de cada candidato.
const prompt = require('prompt-sync')()

let votosCandidato1 = 0
let votosCandidato2 = 0
let votosCandidato3 = 0

let qtdEleitores = Number(prompt('Quantas eleitores irão participar da eleição? '))

let votosCandidatos = [0,0,0]

for(let i = 0; i <qtdEleitores;i++){
    let voto = 0
    while(true){
        voto = Number(prompt('1-Candidato01 2-Candidato02 3-Candidato03: '))
        if(voto <= 3) break
        console.log('\nEntrada inválida\n')
    }
    votosCandidatos[voto-1]++
    // switch(voto){
    //     case 1:
    //         votosCandidato1++
    //         break;
    //     case 2:
    //         votosCandidato2++
    //         break;
    //     case 3:
    //         votosCandidato3++
    //         break;
    // }
}

for (let i = 0; i < votosCandidatos.length; i++) {
    console.log(`Candidato ${i+1}: ${votosCandidatos[i]}`)
}