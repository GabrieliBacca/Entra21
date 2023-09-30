const prompt = require('prompt-sync')()
//quantas vogais tem uma palavra

function contarVogais(palavra) {
    palavra = palavra.toLowerCase();
    const vogais = "aeiou";
    let contador = 0;

    for (let i = 0; i < palavra.length; i++) {
        if (vogais.includes(palavra[i])) {
            contador++;
        }
    }

    return contador;
}

const entrada = prompt("Digite uma palavra: ");
const quantidadeVogais = contarVogais(entrada);
console.log(`A palavra '${entrada}' possui ${quantidadeVogais} vogais.`);
