/*Exercicios For e While
1. Desenvolver um programa para verificar a nota do aluno em uma prova com 10 questões, o programa deve perguntar 
ao aluno a resposta de cada questão e ao final comparar com o gabarito da prova e
assim calcular o total de acertos e a nota (atribuir 1 ponto por resposta certa). 
Após cada aluno utilizar o sistema deve ser feita uma pergunta se outro aluno vai utilizar o sistema. 
Após todos os alunos terem respondido informar:
        Maior e Menor Acerto;
        Total de Alunos que utilizaram o sistema;
A Média das Notas da Turma.
 Gabarito da Prova:
 
01 - A
02 - B
03 - C
04 - D
05 - E
06 - E
07 - D
08 - C
09 - B
10 - A
*/

prompt = require('prompt-sync') ()
let questoes = [], acertos =0
let gabarito = ['A','B','C','D','E','E','D','C','B','A']
let maiorAcerto=0
let menorAcerto=10
let totalAlunos=0, somaNotas=0, media=0

function verificarNota(){
    for(let i=0; i < 10;i++){
        questoes[i] = prompt(`Digite a ${i+1} resposta: `)
    }
    for(let i=0; i<10;i++){
        if(questoes[i]==gabarito[i]){
            acertos++
        }
    }
    
    if(acertos>maiorAcerto){
        maiorAcerto=acertos
    }else if(acertos<menorAcerto){
        menorAcerto=acertos
    }
    media = somaNotas/totalAlunos
    console.log(`Numero de acertos ${acertos}`)
    console.log(`Maior Acerto: ${maiorAcerto}`);
    console.log(`Menor Acerto: ${menorAcerto}`);
    console.log(`Total de Alunos: ${totalAlunos}`);
    console.log(`Média das Notas da Turma: ${media}`);
}
 

while (true) {
    verificarNota();
    totalAlunos++;
    somaNotas += acertos;

    let outroAluno = prompt("Outro aluno vai utilizar o sistema (S para sim, qualquer outra tecla para não)? ");
    if (outroAluno.toUpperCase() !== "S") {
        break; 
    }
}