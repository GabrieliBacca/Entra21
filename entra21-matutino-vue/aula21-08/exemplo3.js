  //const nao pode ser mudada como o let que varia, const para PI, senha, bibliotecas
const pacote = require('prompt-sync')
const prompt = pacote()


let idade = prompt('Digite sua idade: ')
console.log("Sua idade é: " + idade)
