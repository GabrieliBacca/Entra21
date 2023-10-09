//Crie um vetor de números e encontre o menor valor.

let numeros = [10, 5, 8, 20, 15];
let menorValor = Number.MAX_SAFE_INTEGER

for(let i = 1; i < numeros.length; i++){
    if(numeros[i] < menorValor){
        menorValor = numeros[i]
    }
}

console.log("O mneor valor no vetor é:", menorValor)
