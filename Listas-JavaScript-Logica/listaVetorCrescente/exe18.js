//Crie um vetor de números e encontre o maior valor.

let numeros = [10, 5, 8, 20, 15];
let maiorValor = Number.MIN_SAFE_INTEGER

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maiorValor) {
    maiorValor = numeros[i]
  }
}

console.log("O maior valor no vetor é:", maiorValor)
