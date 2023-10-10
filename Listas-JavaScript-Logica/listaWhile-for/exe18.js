// Faça um programa que, dado um conjunto de N 
// números, determine o menor valor, o maior valor e a 
// soma dos valores.

max = Number.MIN_SAFE_INTEGER
min = Number.MAX_SAFE_INTEGER
let soma=0

for(let i=0; i<7; i++){
    num = Math.random() *10
    if(num> max){
        max = num
    }else if(num<min){
        min=num
    }
    soma+=num
}

console.log(`Menor numero: ${min.toFixed(2)}`)
console.log(`Maior numero: ${max.toFixed(2)}`)
console.log(`Soma dos numeros: ${soma.toFixed(2)}`)