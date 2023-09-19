prompt = require('prompt-sync') ()

let num = []

for(let i=0; i<10; i++){
    num[i]=prompt(`Digite o ${i+1} numero: `)
}

for(let i=0; i<num.length; i++){
    console.log(num[i])
}