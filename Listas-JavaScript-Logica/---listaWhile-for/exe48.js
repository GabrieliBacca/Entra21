const prompt = require('prompt-sync')();

let numero = prompt("Digite um número: ")

let numeroInvertido = numero.toString().split('').reverse().join('')
console.log(`Número invertido: ${numeroInvertido}`);
