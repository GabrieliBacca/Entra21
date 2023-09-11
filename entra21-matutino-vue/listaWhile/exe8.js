const prompt = require('prompt-sync')();
let num = [];

for (let i = 0; i < 5; i++) {
    num[i] = Number(prompt(`Digite o ${i + 1}º número: `));
}

let soma = 0;
for (let i = 0; i < num.length; i++) {
    soma += num[i];
}

let media = soma / num.length;

console.log(`A média é: ${media}`);
