prompt = require('prompt-sync') ()

let nome = prompt("Insira o nome do treinador: ")
let nota =0
let min = Number.MAX_SAFE_INTEGER
let max = Number.MIN_SAFE_INTEGER
let soma=0

console.log(`Seja bem vindo treinador(a) ${nome}!`)
for(let i=0; i<7;i++){
    nota =  Math.random() * 10 
    if (nota > max) {
        max = nota;
    }else if(nota<min){
        min=nota
    }
    soma += nota
}

media = (soma-(max+min)) /5
console.log(`Resultado final\nTreinador ${nome}`)
console.log(`Melhor nota ${max.toFixed(2)}`)
console.log(`Pior nota: ${min.toFixed(2)}`)
console.log(`Média das notas: ${media.toFixed(2)}`)

