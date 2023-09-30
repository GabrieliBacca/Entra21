const pacote = require('prompt-sync')
const prompt = pacote()

let numero = parseInt(prompt("Digite um valor para saque: ")) 

if(numero < 600 && numero > 10){
    let cem = Math.floor(numero/100)
    let resto = numero % 100

    let cinq = Math.floor(resto/50)
    resto = resto % 50

    let dez = Math.floor(resto/10)
    resto = resto % 10 

    let cinco = Math.floor(resto/5)
    let um = resto % 5

    console.log(`Para sacar ${numero}`)
    if(cem > 0) console.log(`${cem} de R$100,00`)
    if(cinq > 0) console.log(`${cinq} de R$50,00`)
    if(dez > 0) console.log(`${dez} de R$10,00`)
    if(cinco > 0) console.log(`${cinco} de R$5,00`)
    if(um > 0) console.log(`${um} de R$1,00`)
    
} else{
    console.log("Valor inválido, digite um número entre R$10 e R$600")
}
