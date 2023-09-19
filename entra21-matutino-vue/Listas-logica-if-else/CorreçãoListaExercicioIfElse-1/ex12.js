let req = require('prompt-sync')
let prompt = req()
// 12.	Faça um programa para o cálculo de uma folha de pagamento, 
// sabendo que os descontos são do Imposto de Renda, 
// que depende do salário bruto (conforme tabela abaixo) e 3% para o 
// Sindicato e que o FGTS corresponde a 11% do Salário Bruto, 
// mas não é descontado (é a empresa que deposita). 
// O Salário Líquido corresponde ao Salário Bruto menos os descontos. 
// O programa deverá pedir ao usuário o valor da sua hora e a 
// quantidade de horas trabalhadas no mês.
// 	Desconto do IR:
// 	Salário Bruto até 900 (inclusive) - isento
// 	Salário Bruto até 1500 (inclusive) - desconto de 5%
// 	Salário Bruto até 2500 (inclusive) - desconto de 10%
// Salário Bruto acima de 2500 - desconto de 20% Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e a quantidade de hora é 220.
//         Salário Bruto: (5 * 220)        : R$ 1100,00
//         (-) IR (5%)                     : R$   55,00  
//         (-) INSS ( 10%)                 : R$  110,00
//         FGTS (11%)                      : R$  121,00
//         Total de descontos              : R$  165,00
//           Salário Liquido                 : R$  935,00

const valorHora = Number(prompt('Digite o valor hora:'))
const horasTrabalhadas = Number(prompt('Digite a quantidade de horas trabalhadas:'))

const salarioBruto = valorHora * horasTrabalhadas

let descontoIr = 0

if(salarioBruto <= 900){
    descontoIr = 0
}
else if(salarioBruto <=1500){
    descontoIr = salarioBruto * 0.05
}else if(salarioBruto <= 2500){
    descontoIr = salarioBruto * 0.10
}else{
    descontoIr = salarioBruto * 0.2
}

const descontoInss = salarioBruto * 0.1
const fgts = salarioBruto * 0.11
const descontoSindicato = salarioBruto * 0.03
const totalDescontos = descontoIr - descontoInss - descontoSindicato

const salarioLiquido = salarioBruto - totalDescontos


console.log(`Salário Bruto: R%${salarioBruto}`)
console.log(`(-) IR ${descontoIr > 0 ? "5$, 10% ou 20%" : "isento"}`)
console.log(`(-) INSS (10%) R$${descontoInss.toFixed(2)}` )
console.log(`(-) Sindicato (3%) R$${descontoSindicato.toFixed(2)}` )
console.log(` FGTS (11%) R$${fgts.toFixed(2)}` )
console.log(`Total Descontos R$${totalDescontos.toFixed(2)}` )
console.log(`Salário liquido R$${salarioLiquido.toFixed(2)}`)





