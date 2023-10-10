const prompt = require('prompt-sync')();

let alto = 0
let baixo = 0
let alturaAlto = Number.MIN_SAFE_INTEGER
let alturaBaixo = Number.MAX_SAFE_INTEGER

for (let i = 1; i <= 3; i++) {
    let numeroAluno = prompt(`Digite o número do aluno: `)
    let altura = Number(prompt(`Digite a altura do aluno ${numeroAluno} em centímetros: `))

    if (altura > alturaAlto) {
        alto = numeroAluno
        alturaAlto = altura
    }

    if (altura < alturaBaixo) {
        baixo = numeroAluno
        alturaBaixo = altura
    }
}

console.log(`O aluno mais alto é o número ${alto} com ${alturaAlto} cm de altura`)
console.log(`O aluno mais baixo é o número ${baixo} com ${alturaBaixo} cm de altura`)
