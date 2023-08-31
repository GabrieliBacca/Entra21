const prompt = require('prompt-sync')()
let menu = 1

while (menu != 0) {
    let a = Number(prompt("Informe o valor de A: "))
    let b = Number(prompt("Informe o valor de B: "))

    while (a >= b) {
        console.log("A população de A já ultrapassou a população de B")
        a = Number(prompt("Informe o valor de A: "))
        b = Number(prompt("Informe o valor de B: "))
    }
    let taxaA = Number(prompt("Informe a taxa de crescimento de A: "))
    let taxaB = Number(prompt("Informe a taxa de crescimento de B: "))
    let ano = 0

    let resultadoA = taxaA / 100
    let resultadoB = taxaB / 100

    while (a <= b) {
        a += (a * resultadoA)
        b += (b * resultadoB)
        ano += 1
    }
    console.log(`A ultrapassa ou iguala B em ${ano} ano(s)`)

    menu = Number(prompt("1-Rodar novamente\n0-Sair"))
}
