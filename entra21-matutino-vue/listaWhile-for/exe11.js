prompt = require('prompt-sync')();

let n1 = Number(prompt("Informe o primeiro número: "));
let n2 = Number(prompt("Informe o segundo número: "));
let soma = 0;

for (let i = n1; i <= n2; i++) {
    console.log(i);
    soma += i;
}

console.log(`A soma dos números é: ${soma}`);
