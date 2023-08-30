const prompt = require('prompt-sync') () 
let soma = 0

while(true){
    let numero = Number(prompt("Digite um número: "))

    if(numero < 0) break;
    soma+= numero
    
}
console.log(`A soma é ${soma}`)
