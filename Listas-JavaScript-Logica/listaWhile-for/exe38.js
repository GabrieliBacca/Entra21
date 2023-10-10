const prompt = require('prompt-sync')();

let salario = 1000
let percentualAumento = 1.5
let anoContratacao = 1995
let anoAtual = 2023

for (let ano = anoContratacao + 1; ano <= anoAtual; ano++) {
    salario += salario * (percentualAumento / 100)
}

console.log(`O salário atual em ${anoAtual} é de R$ ${salario.toFixed(2)}`)
