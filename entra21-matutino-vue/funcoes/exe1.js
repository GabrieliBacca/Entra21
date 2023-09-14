prompt = require('prompt-sync') ()

//Crie uma função que receba um número como parâmetro e retorne true se o número for primo e false se não for.

function primo(num){
    for(let i=2; i < num; i++){
        if(num % i == 0){
            console.log('não é primo')
        }else{
            console.log("é primo")
        }
        break;
    }
}

let input = Number(prompt("Digite um numero: "))
primo(input)