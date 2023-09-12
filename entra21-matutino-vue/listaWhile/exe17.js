prompt = require('prompt-sync')();

let num = Number(prompt("Digite um número: "))
fatorial =1

for(let i = num; i > 1; i--){
    fatorial = fatorial*i
}
console.log(fatorial)
