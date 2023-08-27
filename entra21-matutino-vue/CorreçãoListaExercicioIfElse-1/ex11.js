let req = require('prompt-sync')
let prompt = req()
// 11.	As Organizações Tabajara resolveram dar um aumento de salário aos seus 
// funcionário e lhe contrataram para desenvolver o programa que calculará os reajustes.
// 	Faça um programa que recebe o salário de um colaborador e o reajuste segundo 
// o seguinte critério, baseado no salário atual:
// 	salários até R$ 280,00 (incluindo) : aumento de 20%
// 	salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
// 	salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
// 	salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
// 	o salário antes do reajuste;
// 	o percentual de aumento aplicado;
// 	o valor do aumento;
// 	o novo salário, após o aumento.0

let salario,porcentagem

salario = Number(prompt('Digite o salário do funcionário: '))

if(salario <=280){
    porcentagem = 20
}else if(salario <= 700){
    porcentagem = 15
}else if(salario <= 1500){
    porcentagem = 10
}else{
    porcentagem = 5
}
console.log(`Salário antes do reajuste: R$${salario}`)
console.log(`Percentual de aumento aplicado: ${porcentagem}%`)
console.log(`Valor do aumento: R$${salario*(porcentagem/100)}`)
console.log(`Novo salário: R$${salario+(salario*(porcentagem/100))}`)
