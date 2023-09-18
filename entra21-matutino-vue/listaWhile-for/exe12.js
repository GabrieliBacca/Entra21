prompt = require('prompt-sync')();

let num = Number(prompt("Informe um número no qual deseja ver a tabuada: "))

for(let i=0; i<=10;i++){
    console.log(`${num} * ${i} = ${i*num}`)
}