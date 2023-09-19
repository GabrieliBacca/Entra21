prompt = require('prompt-sync') ()

let notas = []

for(let i= 0; i < 6; i++){
    notas[i] = prompt(`Digite a ${i+1} nota: `)
}

for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}