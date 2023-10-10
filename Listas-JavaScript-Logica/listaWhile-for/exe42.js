const prompt = require('prompt-sync')()

let numero
let intervalo1 = 0
let intervalo2 = 0
let intervalo3 = 0
let intervalo4 = 0

console.log("Digite números positivos (Digite um número negativo para encerrar):")

do {
    numero = Number(prompt("Número: "))

    if (numero >= 0 && numero <= 25) {
        intervalo1++
    } else if (numero >= 26 && numero <=50) {
        intervalo2++
    } else if (numero>= 51 && numero<= 75) {
        intervalo3++
    } else if (numero >= 76 && numero<= 100) {
        intervalo4++
    }
} while (numero >= 0)

console.log("Quantidade de números nos intervalos:")
console.log("[0-25]: " + intervalo1)
console.log("[26-50]: " + intervalo2)
console.log("[51-75]: " + intervalo3)
console.log("[76-100]: " + intervalo4)
