fetch('http://localhost:3000/votacao').then(votos => votos.json())

let votacaoAtual = 0

// Função assíncrona para obter a contagem atual de votos do servidor.
async function obterVotacao() {
    try {
        // Realiza uma requisição assíncrona usando o método fetch para o endpoint '/votacao'.
        const response = await fetch('http://localhost:3000/votacao');
        console.log(response)
        const votos = await response.json();
        console.log('Votação:', votos);

        // Atualiza a variável local 'votacaoAtual' com a contagem total de votos.
        votacaoAtual = votos.total
        verificarVotos();

    } catch (error) {
        console.error('Erro ao obter a votação:', error);
    }

}

// Enviar um voto para a API
async function votar(universo) {
    try {
        const response = await fetch('http://localhost:3000/votar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ [universo]: 1 })
        });
        const data = await response.json();
        alert('Voto computado com sucesso!')
        votos += 1
        verificarVotos();
    } catch (error) {
        console.log('Erro ao votar:', error);
    }
}

async function resetar() {
    try {
        const response = await fetch('http://localhost:3000/reset', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json();
        console.log('Contagem de votos reiniciada:', data);

    } catch (error) {
        console.error('Erro ao reiniciar a votação:', error);
    }
}

// Função para verificar se existem votos computados e exibir o botão de resultado
function verificarVotos() {
    if (votos > 0) {
        document.getElementById('resultado').style.display = 'block';
    }
}

function abrirResultados() {
    window.location.href = "resultados.html";
}

function voltarVotar() {
    window.location.href = "votar.html";
}
