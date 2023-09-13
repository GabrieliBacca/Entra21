prompt = require('prompt-sync') ()
// const valor = Math.random() * 10

let valor = Number(prompt(("Digite o valor do pão: ")))
let num =0
for(let i=0; i<50; i++){
    let tabela = num+= valor
    console.log(`${i+1} - ${tabela.toFixed(2)}`)
}