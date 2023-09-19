const pacote = require('prompt-sync')
const prompt = pacote()

let senha = Number(prompt("Digite a senha: "))

while (senha != '1234'){ 
    console.log("Login invalido!")
    senha = prompt("Digite a senha novamente: ")
}

console.log("Bem vindo ao sistema!")