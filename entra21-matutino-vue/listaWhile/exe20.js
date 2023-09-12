const prompt = require('prompt-sync')();

let num = 1;

while (num > 0) {
    num = Number(prompt("Digite um número: (ou negativo para sair): "));

    if (num < 0) {
        break; // Se o número for negativo, saia do loop
    }

    let fatorial = 1;

    for (let i = num; i > 1; i--) {
        fatorial = fatorial * i;
    }
    
    console.log(`O fatorial de ${num} é ${fatorial}`);
}
