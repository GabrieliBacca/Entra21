const prompt = require('prompt-sync') () 

let num = Number(prompt("Digite um número: "))

if(isNaN(num)){
    console.log("Não é um número")
}else{
    let contador = 1
    let fatorial = 1

    //Calculando o fatorial

    while(contador <= num){
        //fatorial = fatorial * contador
        fatorial *= contador
        contador++
        console.log(fatorial)
    }
    console.log(`O resultado de ${num}! é ${fatorial}`)
}