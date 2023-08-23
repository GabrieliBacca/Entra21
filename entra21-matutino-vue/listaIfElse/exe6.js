const pacote = require('prompt-sync')
const prompt = pacote()

let num1 = Number(prompt("Digite o primeiro numero: "))
let num2 = Number(prompt("Digite o segundo numero: "))
let num3 = Number(prompt("Digite o terceiro numero: "))

if(num1 > num2 && num1 > num3){
    console.log(`O numero ${num1} é maior`)
} else if(num2 > num1 && num2 > num3){
    console.log(`O numero ${num2} é maior`)
}else{
    console.log(`O numero ${num3} é maior`)

}