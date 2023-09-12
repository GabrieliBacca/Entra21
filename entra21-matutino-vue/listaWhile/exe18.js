let num =  0
max = Number.MIN_SAFE_INTEGER
min = Number.MAX_SAFE_INTEGER
let soma =0

for(let i =0; i < 7; i++){
    num = Math.random() * 10
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

