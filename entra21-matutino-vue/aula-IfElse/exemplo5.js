//Validação de senha e usuario

const pacote = require('prompt-sync')
const prompt = pacote()

let usuarioLocal = "admin"
let senhaLocal = "1234"

//Validação individual
/*
let usuario = prompt("Usuário: ")

if(usuario != usuarioLocal){
    console.log('Usuário não cadastrado')
}

let senha = prompt("Senha: ")

if(senha != senhaLocal){
    console.log('senha incorreta')
}
*/
//validação consjunta

let usuario = prompt("Usuário: ")
let senha = prompt("Senha: ")

if(usuario == usuarioLocal && senha == senhaLocal){
    console.log("Login efetuado com sucesso")
}else{
    console.log("Informações incorretas")
}
