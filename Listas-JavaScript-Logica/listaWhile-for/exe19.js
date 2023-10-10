prompt = require('prompt-sync') ()

let num =  0
max = Number.MIN_SAFE_INTEGER
min = Number.MAX_SAFE_INTEGER
let soma =0

let qtd = Number(prompt("Digite a quantidade de números para gerar: "))

for(let i =0; i < qtd; i++){
    do{
        num = Number(prompt(`Digite o ${i+1} numero: `))
    }
    while(num<0 || num>1000)
    if(num> max){
        max = num
    }else if(num<min) {
        min= num
    }
    soma+= num
}

console.log(`Menor numero: ${min.toFixed(2)}`)
console.log(`Maior número: ${max.toFixed(2)}`)
console.log(`Soma dos números: ${soma.toFixed(2)}`)


