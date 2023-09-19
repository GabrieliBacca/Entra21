
const numero  = 113

let ehPrimo = true

for(let i = 2; i < numero; i++){
    if(numero % i == 0){
        ehPrimo = false
        break;
    }
}

console.log(ehPrimo ? 'É um numero primo' :'Não é um número primo')