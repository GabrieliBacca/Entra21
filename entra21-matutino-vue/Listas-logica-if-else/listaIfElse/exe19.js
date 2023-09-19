const pacote = require('prompt-sync')
const prompt = pacote()

let numero = Number(prompt("Digite um numero: ")) 
let unidade = numero % 10

numero = (numero - unidade)/10
dezena = numero % 10

numero = (numero - dezena)/10
centena = numero

console.log(centena,'centena(s),',dezena,'dezena(s) e',unidade,'unidade(s)')