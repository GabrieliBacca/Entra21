const pacote = require('prompt-sync')
const prompt = pacote()

let num1 = Number(prompt("Digite o valor do primeiro produto: "))
let num2 = Number(prompt("Digite o valor do segundo produto: "))
let num3 = Number(prompt("Digite o valor do terceiro produto: "))

if(num1 < num2 && num1 < num3){
    console.log(`Você deve comprar o primeiro produto, pois R$${num1} é o mais barato`)
} else if(num2 < num1 && num2 < num3){
    console.log(`Você deve comprar o segundo produto, pois R$${num2} é o mais barato`)
}else{
    console.log(`Você deve comprar o terceiro produto, pois R$${num3} é o mais barato`)

}
