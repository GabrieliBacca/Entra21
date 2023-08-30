const prompt = require('prompt-sync') ()

let nome = prompt("Digite uma nome: ")
let senha = prompt("Digite uma senha: ")

while(nome == senha){
    console.log("A senha não pode ser igual ao nome\nDigite novamente")
    nome = prompt("Digite uma nome: ")
    senha = prompt("Digite uma senha: ")

}
console.log("Login realizado")
