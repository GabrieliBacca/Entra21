/*O Departamento Estadual de Meteorologia lhe contratou para desenvolver um programa que leia um 
conjunto indeterminado de temperaturas, e informe ao final a menor e a maior temperaturas informadas,
 bem como a média das temperaturas.*/

prompt = require("prompt-sync")()
let num = 1
let max = Number.MIN_SAFE_INTEGER
let min = Number.MAX_SAFE_INTEGER

do {
    num = Number(prompt("Informe uma temperatura(para sair do loop digite 0): "))
    for (let i = 0; i != 0; i++) {
        if(num> max){
            max = num
        }else if(num<min){
            min=num
        }
    }
} while (num != 0);

console.log(`Maior= ${max}`)
console.log(`Menor= ${min}`)
