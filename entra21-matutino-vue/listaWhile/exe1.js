const prompt = require('prompt-sync') ()

let nota = Number(prompt("Digite uma nota: "))

    while(nota < 0 || nota > 10){
        console.log("Nota invalida \n")
        nota = Number(prompt("Digite a nota novamente: "))
    }

    console.log("valor valido")

    
