const prompt = require('prompt-sync') () //funcao de ler em uma forma simplificada 

let i = 0
let notas = []
let num = Number(prompt("Quantas notas seram digitadas: "))
let soma = 0
while(i<num){
    notas[i] =  Number(prompt(`Digite a ${i+1}ª nota: `))
    soma += notas[i]
    i++
}

let media = soma / notas.length
console.log('Media: ' +media)
