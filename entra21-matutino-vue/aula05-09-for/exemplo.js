// Função para ordenar números pares em ordem crescente
function ordenarParesCrescente(a, b) {
    return a - b;
}

// Função para ordenar números ímpares em ordem decrescente
function ordenarImparesDecrescente(a, b) {
    return b - a;
}

// Inicialize um vetor para armazenar os números
var numeros = [];

// Loop para permitir que o usuário insira números
while (true) {
    var entrada = prompt("Digite um número (ou digite 'sair' para encerrar):");

    // Verificar se o usuário deseja sair
    if (entrada === 'sair' || entrada === null) {
        break;
    }

    // Converter a entrada em um número inteiro
    var numero = parseInt(entrada);

    // Verificar se a entrada é um número válido
    if (!isNaN(numero)) {
        numeros.push(numero);
    } else {
        alert("Entrada inválida. Digite um número válido ou 'sair' para encerrar.");
    }
}

// Separe os números pares e ímpares
var pares = [];
var impares = [];

for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
    } else {
        impares.push(numeros[i]);
    }
}

// Ordene os números pares em ordem crescente
pares.sort(ordenarParesCrescente);

// Ordene os números ímpares em ordem decrescente
impares.sort(ordenarImparesDecrescente);

// Combine os números pares e ímpares organizados
var numerosOrganizados = pares.concat(impares);

// Exiba o resultado
console.log("Números organizados: " + numerosOrganizados.join(", "));
