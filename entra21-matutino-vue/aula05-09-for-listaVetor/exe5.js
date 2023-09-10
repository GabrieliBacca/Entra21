prompt = require('prompt-sync') ()

let vetor1 = []
let vetor2 = []
let subtracao = []
let soma = []
let mult = []
let div = []

for(let i=0; i<3;i++){
    vetor1[i]=Number(prompt(`Digite o ${i+1} número: `))
}

for(let i=0; i<3;i++){
    vetor2[i]=Number(prompt(`Digite o ${i+1} número: `))
}

for(let i=0; i<3; i++){
    subtracao[i] = vetor1[i] - vetor2[i]
    soma[i] = vetor1[i] + vetor2[i]
    mult[i] = vetor1[i] * vetor2[i]
    div[i] = vetor1[i]/vetor2[i]
}

console.log(`Subtração dos vetores: ` + subtracao)
console.log(`Soma dos vetores: ` + soma)
console.log(`Multiplicação dos vetores: ` +mult)
console.log(`Divisão dos vetores: ` +div)