const prompt = require('prompt-sync')();
let max = Number.MIN_SAFE_INTEGER;
let num

for (let i = 0; i < 5; i++) {
    num = Number(prompt(`Digite o ${i + 1}º número: `));
    if (num > max) {
        max = num;
    }
}
console.log(`O maior número é: ${max}`);
