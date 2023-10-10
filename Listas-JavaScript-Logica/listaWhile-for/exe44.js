const prompt = require('prompt-sync')()

let candidato1 = 0
let candidato2 = 0
let candidato3 = 0
let candidato4 = 0
let nulo = 0
let branco = 0
let total = 0

console.log("Eleição Presidencial")
console.log("1 - Candidato 1")
console.log("2 - Candidato 2")
console.log("3 - Candidato 3")
console.log("4 - Candidato 4")
console.log("5 - Voto Nulo")
console.log("6 - Voto em Branco")
console.log("Digite o código do candidato(ou 0 para encerrar a votação):")

while (true) {
    let voto = Number(prompt("Código do candidato: "))


    switch (voto) {
        case 1:
            candidato1++
            total++
            break;
        case 2:
            candidato2++
            total++
            break;
        case 3:
            candidato3++
            total++
            break;
        case 4:
            candidato4++
            total++
            break;
        case 5:
            nulo++
            total++
            break;
        case 6:
            branco++
            total++
            break;
        default:
            console.log("Código de votação inválido.")
    }
    if (voto==0) {
        break;
    }
}

console.log("\nResultado:")
console.log("Candidato 1: " + candidato1 + " votos")
console.log("Candidato 2: " + candidato2 + " votos")
console.log("Candidato 3: " + candidato3 + " votos")
console.log("Candidato 4: " + candidato4 + " votos")
console.log("Votos Nulos: " + nulo + " votos")
console.log("Votos em Branco: " + branco + " votos")
console.log("Percentagem de Votos Nulos:" + ((nulo/total) * 100).toFixed(2) + "%")
console.log("Percentagem de Votos em Branco: " + ((branco/total) * 100).toFixed(2) + "%")
