prompt = require('prompt-sync')()

let base = Number(prompt("Informe a base: "))
let expoente = Number(prompt("Informe o expoente: "))
let resultado = 1

for(let i=0; i<expoente;i++){
    resultado = resultado * base
}
console.log(`Resultado de ${base} elevado ${expoente} = ${resultado}`)