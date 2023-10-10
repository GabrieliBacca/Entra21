const prompt = require('prompt-sync')();

let cod;
let maisAlto = null;
let maisBaixo = null;
let maisGordo = null;
let maisMagro = null;
let somaAlturas = 0, quantidadeClientes = 0, somaPesos = 0;

do {
    cod = Number(prompt("Digite seu código (ou 0 para encerrar): "));

    if (cod !== 0) {
        let altura = Number(prompt("Digite sua altura (em metros): "));
        let peso = Number(prompt("Digite seu peso (em quilogramas): "));

        somaAlturas += altura;
        somaPesos += peso;
        quantidadeClientes++;

        if (maisAlto == null || altura > maisAlto.altura) {
            maisAlto = { cod, altura };
        }
        if (maisBaixo == null || altura < maisBaixo.altura) {
            maisBaixo = { cod, altura };
        }
        if (maisGordo == null || peso > maisGordo.peso) {
            maisGordo = { cod, peso };
        }
        if (maisMagro == null || peso < maisMagro.peso) {
            maisMagro = { cod, peso };
        }
    }
} while (cod !== 0);

if (quantidadeClientes > 0) {
    const mediaAlturas = somaAlturas / quantidadeClientes;
    const mediaPesos = somaPesos / quantidadeClientes;

    console.log(`Mais alto ${maisAlto.cod}, altura: ${maisAlto.altura}`);
    console.log(`Mais baixo: ${maisBaixo.cod}, altura: ${maisBaixo.altura}`);
    console.log(`Mais gordo: ${maisGordo.cod}, peso: ${maisGordo.peso}`);
    console.log(`Mais magro: ${maisMagro.cod}, peso: ${maisMagro.peso}`);
    console.log(`Média das alturas: ${mediaAlturas.toFixed(2)}`);
    console.log(`Média dos pesos: ${mediaPesos.toFixed(2)}`);
} else {
    console.log("Nenhum cliente registrado");
}
