let req = require('prompt-sync')
let prompt = req()
// 17.	Faça um Programa que peça um número correspondente 
// a um determinado ano e em seguida informe se este ano é ou não bissexto.

const ano = parseInt(prompt('Digite um ano'))

if((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0){
    console.log(`${ano} é bissexto`)
}else{
    console.log(`${ano} não é bissexto`)
}

