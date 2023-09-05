prompt = require('prompt-sync') ()

let num = []

for(let i = 0; i<2; i++){
    num[i] = prompt(`Digite o ${i+1} numero: `)
}

let inverso = num.slice().reverse()

for(let i = 0; i < inverso.length ; i++){
    console.log(inverso[i])
}
