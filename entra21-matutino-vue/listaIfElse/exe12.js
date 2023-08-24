const pacote = require('prompt-sync')
const prompt = pacote ()

let horasTrabalhadas = Number(prompt("Digite quantas horas trabalhadas você possui: "))
let valorHora = Number(prompt("Digite o valor da sua hora: "))
let salario= horasTrabalhadas * valorHora
let ir 

console.log(`Salário Bruto: ${horasTrabalhadas} * ${valorHora} = ${salario}`)

if (salario > 900 && salario <=1500) {
ir =  salario * 0.05
console.log(`(-) IR (5%) = ${ir}`)
} 
else if (salario > 1500 && salario <=2500 ){
ir = salario * 0.1
console.log(`(-) IR (10%) = ${ir}`)
}
else if(salario > 2500) {
ir= salario * 0.2
console.log(`(-) IR (20%) = ${ir}`)
}

let inss = salario*0.1
console.log(`(-) INSS ( 10%) = ${inss}`)

let fgts = salario*0.11
console.log(`FGTS (11%) = ${fgts}`)

let desconto = ir+inss
console.log(`Total de descontos: R$` + desconto)

let novoSalario = salario - inss - ir
console.log(`Salário liquido: R$ ${novoSalario}`)