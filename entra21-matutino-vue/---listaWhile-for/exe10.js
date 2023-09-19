prompt = require('prompt-sync') ()

let n1 = Number(prompt("Informe o primeiro número: "))
let n2 = Number(prompt("Informe o segundo número: "))


for(let i = n1; i<= n2; i++){
    console.log(n1++)
}