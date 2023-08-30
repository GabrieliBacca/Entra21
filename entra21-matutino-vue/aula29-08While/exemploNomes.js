const prompt = require('prompt-sync')()

let nomes = []
let i = 0
while(i < 200){
    nomes[i] = prompt('Digite um nome: ')
    i++
}

console.log('\nNomes cadastrados: ')
i = 0
while(i < nomes.length){
    console.log(nomes[i])
    i++
}