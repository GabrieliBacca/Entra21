//Volume da piramede

const pacote = require('prompt-sync')
const prompt = pacote()

let area = Number(prompt("Digite o valor da area da piramede: "))
let altura = Number(prompt("Digite o valor da altura da piramede: "))

console.log(`O volume da piramede com area = ${area} e altura= ${altura} é: ` + (area*altura)/3)
