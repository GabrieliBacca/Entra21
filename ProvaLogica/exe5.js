prompt = require('prompt-sync') ()

let senha = "1234"
let tentativa = Number(prompt("Digite a senha: "))

while(tentativa != senha){
    console.log("Senha Incorreta\n")
    tentativa = Number(prompt("Digite a senha: "))
}
console.log("Bem vindo ao Sistema!")