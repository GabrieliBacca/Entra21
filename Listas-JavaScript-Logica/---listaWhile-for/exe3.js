const prompt = require('prompt-sync')()

let nome = prompt("Digite uma nome: ")
while (nome.length < 3) {
    console.log("O nome tem que ser maior que três caracteres\nDigite novamente")
    nome = prompt("Digite uma nome: ")
}

let idade = prompt("Digite uma idade: ")
while (idade > 150 || idade < 0) {
    console.log("A idade tem que estar entre 0 e 150\nDigite novamente")
    idade = prompt("Digite uma idade: ")
}

let salario = prompt("Digite um salário: ")
while (salario <= 0) {
    salario = Number(prompt("Salario tem que ser maior que 0\nDigite um salario: "))
}

let sexo = prompt("Digite seu sexo('f', 'm'): ").toLocaleLowerCase
while (sexo != 'f' && sexo != 'm') {
    sexo = prompt("Inválido\nDigite novamente: ")
}

let estadoCivil = prompt("Digite seu estado civil('s', 'c', 'd', 'v'): ").toLocaleLowerCase
while (estadoCivil != 's' && estadoCivil != 'c' && estadoCivil != 'd' && estadoCivil != 'v') {
    estadoCivil = prompt("Inválido\nDigite novamente: ")
}

console.log("Informações corretas")
