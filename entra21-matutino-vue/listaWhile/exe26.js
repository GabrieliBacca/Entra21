/*
Numa eleição existem três candidatos. Faça um programa que peça o número total de eleitores. Peça para cada eleitor votar e ao final mostrar o número de votos de cada candidato.
*/

prompt = require('prompt-sync') ()

let candidato1 = 0
let candidato2 = 0
let candidato3 = 0

let qtdEleitores = Number(prompt("Quantos eleitores irao participar da eleção: "))

let voto

for(let i=0; i<qtdEleitores;i++){
    while(true){
        voto = Number(prompt("1-Candidado01 2-Candidado02 3-Candidato03:  "))
        if(voto<=3) break
    }
    switch(voto){
        case 1:
            candidato1++
            break
        case 2:
            candidato2++
            break
        case 3:
            candidato3++   
            break     
    }
}
console.log('Total de votos\n')
console.log(`Candidado 1 ${candidato1}`)
console.log(`Candidado 2 ${candidato2}`)
console.log(`Candidado 3 ${candidato3}`)