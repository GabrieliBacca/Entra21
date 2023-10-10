/*Faça um programa que calcule o número médio de alunos por turma. Para isto, peça a quantidade de turmas e a quantidade de alunos para cada turma. 
As turmas não podem ter mais de 40 alunos.*/

prompt = require('prompt-sync') ()

let qtdTurmas = Number(prompt("Quantas turmas tem no entra21: "))
let soma=0

for (let i=0; i<qtdTurmas;i++){
    let qtdAlunos =0
    do{
        qtdAlunos = Number(prompt("Quantos alunos tem nessa turma: "))
        console.log(qtdAlunos>40 ? 'Entrada Inválida' : "")
    }while(qtdAlunos >40)
    soma+= qtdAlunos;
}

let media = soma/qtdTurmas

console.log("Media de alunos por turma: " + media)