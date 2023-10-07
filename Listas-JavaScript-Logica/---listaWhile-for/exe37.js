/*Uma academia deseja fazer um censo entre seus clientes para descobrir o mais alto, o mais baixo, o mais gordo e o mais magro,
para isto você deve fazer um programa que pergunte a cada um dos clientes da academia seu código, sua altura e seu peso.
O final da digitação de dados deve ser dada quando o usuário digitar 0 (zero) no campo código. 
Ao encerrar o programa também deve ser informados os códigos e valores do cliente mais alto, do mais baixo, do mais gordo e do mais magro, 
além da média das alturas e dos pesos dos clientes*/

/*
const prompt = require('prompt-sync')();

let cod = 1;
let maisAlto = null;
let maisBaixo = null;
let maisGordo = null;
let maisMagro = null;
let somaAlturas = 0;
let somaPesos = 0;
let quantidadeClientes = 0;

do {
    cod = Number(prompt("Digite seu código (ou 0 para encerrar): "));
    
    if (cod !== 0) {
        let altura = Number(prompt("Digite sua altura (em metros): "));
        let peso = Number(prompt("Digite seu peso (em quilogramas): "));
        
        somaAlturas += altura;
        somaPesos += peso;
        quantidadeClientes++;

        if (maisAlto === null || altura > maisAlto.altura) {
            maisAlto = { cod, altura };
        }
        if (maisBaixo === null || altura < maisBaixo.altura) {
            maisBaixo = { cod, altura };
        }
        if (maisGordo === null || peso > maisGordo.peso) {
            maisGordo = { cod, peso };
        }
        if (maisMagro === null || peso < maisMagro.peso) {
            maisMagro = { cod, peso };
        }
    }
} while (cod !== 0);

if (quantidadeClientes > 0) {
    const mediaAlturas = somaAlturas / quantidadeClientes;
    const mediaPesos = somaPesos / quantidadeClientes;

    console.log(`Cliente mais alto: Código ${maisAlto.cod}, Altura ${maisAlto.altura} metros.`);
    console.log(`Cliente mais baixo: Código ${maisBaixo.cod}, Altura ${maisBaixo.altura} metros.`);
    console.log(`Cliente mais gordo: Código ${maisGordo.cod}, Peso ${maisGordo.peso} quilogramas.`);
    console.log(`Cliente mais magro: Código ${maisMagro.cod}, Peso ${maisMagro.peso} quilogramas.`);
    console.log(`Média das alturas: ${mediaAlturas.toFixed(2)} metros.`);
    console.log(`Média dos pesos: ${mediaPesos.toFixed(2)} quilogramas.`);
} else {
    console.log("Nenhum cliente registrado.");
}
*/