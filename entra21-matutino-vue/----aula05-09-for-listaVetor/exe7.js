const prompt = require('prompt-sync')();

let num1 = [2, 3, 5];
let num2 = [2, 3, 6];

function vetoresIguais(vetor1, vetor2) {
    for (let i = 0; i < vetor1.length; i++) {
        if (vetor1[i] !== vetor2[i]) {
            return false;
        }
    }

    return true;
}

if (vetoresIguais(num1, num2)) {
    console.log("Os vetores são iguais.");
} else {
    console.log("Os vetores são diferentes.");
}
