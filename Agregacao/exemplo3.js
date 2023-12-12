
// Utilizando JSON e ForEach criar um sistema de cadastro de alunos
// Cada luno deve ter nome, idade, nota1, nota2,nota3

let alunos = []

while(true){
    let menu = prompt('1-Novo Aluno\n2-Ver Alunos\n3-Media\n4-Sair')
    
    if(menu=='1'){
        let nome = prompt('Digite o nome: ')
        let notas =[]

        for(let i=0;i<4;i++){
            notas[i] =Number(prompt(`Digite a ${i+1} nota`))
        }
        // let nota1 = Number(prompt('Nota 1: '))
        // let nota2 = Number(prompt('Nota 2: '))
        // let nota3 = Number(prompt('Nota 3: '))
        
        let aluno ={
            nome: nome,
            nota: notas
            // nota1: nota1,
            // nota2: nota2,
            // nota3: nota3
        }

        alunos.push(aluno)
    }
    else if(menu=='2'){

        alunos.forEach(aluno => console.log(aluno))

        // alunos.forEach(a =>{
        //     console.log(`Nome: ${a.nome}\nNota 1:${a.nota1} \nNota 2:${a.nota2}\nNota 3:${a.nota3}`)
        // })
    }else if(menu=='3'){
        let soma =0 
        alunos.forEach(aluno =>{
            let media =0

            for(let i=0;i<aluno.notas;i++){
                media = aluno.notas[i]
            }

            soma += media/aluno.nota.length
        })

        // alunos.forEach(aluno =>{
        //     soma += (aluno.nota1 + aluno.nota2 + aluno.nota3)/3
        // })
        alert(`1Media da turma: ${soma/(alunos.length)}`)
    }
    else if(menu=='4') break
}



