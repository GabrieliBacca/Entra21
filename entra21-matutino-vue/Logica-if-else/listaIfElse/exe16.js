const pacote = require('prompt-sync')
const prompt = pacote()

let a = Number (prompt("Digite o valor de a: "))
let b = Number (prompt("Digite o valor de b: "))
let c = Number (prompt("Digite o valor de c: "))

let delta= (Math.pow(b,2))- 4 *a*c

if(a == 0){
    console.log("A equação não é de segundo grau")
}else if(delta <0){
    console.log("A equação não possui raizes reais")
}else if(delta == 0){
    console.log("A equação possui apenas uma raiz real")
}else{
    console.log("Resultado x1: " + (-b + Math.sqrt(delta)) / (2*a))
    console.log("Resultado x2: " + (-b - Math.sqrt(delta)) / (2*a))
    console.log("Resultado delta: " +delta) 
}