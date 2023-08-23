const pacote = require('prompt-sync')
const prompt = pacote()

let salario = Number(prompt("Informe seu salário R$ "))

if(salario <=280){
    let aumento= (salario*0.2)
    console.log("Seu antigo salário: " + salario)
    console.log("Aumento de 20% no valor R$" + aumento)
    salario= salario + aumento
    console.log("Seu novo salário é: " + salario)

}else if(salario > 280 && salario <=700){
    let aumento= (salario*0.15)
    console.log("Seu antigo salário: " + salario)
    console.log("Aumento de 15% no valor R$" + aumento)
    salario= salario + aumento
    console.log("Seu novo salário é: " + salario)
}
else if(salario > 700 && salario <= 1500){
    let aumento= (salario*0.1)
    console.log("Seu antigo salário: " + salario)
    console.log("Aumento de 10% no valor R$" + aumento)
    salario= salario + aumento
    console.log("Seu novo salário é: " + salario)
}
else{
    let aumento= (salario*0.05)
    console.log("Seu antigo salário: " + salario)
    console.log("Aumento de 5% no valor R$" + aumento)
    salario= salario + aumento
    console.log("Seu novo salário é: " + salario)
}