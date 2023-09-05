prompt = require('prompt-sync') ()

let frutas = []

for(let i =0; i<10; i++){
    frutas[i] = prompt('Digite o nome da fruta: ')
}

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
    
}