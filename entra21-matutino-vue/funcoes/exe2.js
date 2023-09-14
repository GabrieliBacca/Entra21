//Crie uma função que receba uma string como parâmetro e retorne true se a string for um palíndromo e false se não for.

prompt = require('prompt-sync') ()
function invertida(string){
    return string.split('').reverse().join('');
 }

function palindromo(string){
    if(string == invertida(string)){
        console.log("palindromo")
    }else{
        console.log("não é um palindromo")
    }
}

let input = prompt("Digite uma palavra: ")
palindromo(input)

