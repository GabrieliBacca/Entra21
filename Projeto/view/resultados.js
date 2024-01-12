// Função para atualizar a largura das seções de votos
async function atualizarLarguraSecoes() {
  try {
    const responseVotacao = await fetch('http://localhost:3000/votacao');
    const votos = await responseVotacao.json();

    const responsePorcentagemMarvel = await fetch('http://localhost:3000/porcentagemmarvel');
    const porcentagemMarvel = await responsePorcentagemMarvel.json();

    const responsePorcentagemDC = await fetch('http://localhost:3000/porcentagemdc');
    const porcentagemDC = await responsePorcentagemDC.json();


    const gridVotos = document.querySelector('.grid-votos');
    gridVotos.style.gridTemplateColumns = `${porcentagemDC}% ${porcentagemMarvel}%`;
    gridVotos.style.fontSize = `${porcentagemDC}px ${porcentagemMarvel}px`;

    const porMarvel = document.getElementById("por-naruto");
    const porDC = document.getElementById("por-dbz");

    porMarvel.innerText = `${porcentagemMarvel}%`;
    porDC.innerText = `${porcentagemDC}%`;
  } catch (error) {
    console.error('Erro ao atualizar as seções:', error);
  }
}

// Define a classe de animação com base nos votos
async function aplicarAnimacao() {
  const secaoDC = document.getElementById('secao-dbz');
  const secaoMarvel = document.getElementById('secao-naruto');

  try {
    const respostaVotacao = await fetch('http://localhost:3000/votacao');
    const votos = await respostaVotacao.json();

    const respostaPorcentagemMarvel = await fetch('http://localhost:3000/porcentagemmarvel');
    const porcentagemMarvel = await respostaPorcentagemMarvel.json();

    const respostaPorcentagemDC = await fetch('http://localhost:3000/porcentagemdc');
    const porcentagemDC = await respostaPorcentagemDC.json();

    if (porcentagemDC > porcentagemMarvel) {
      secaoDC.classList.remove('scale-up-hor-rightt');
      secaoDC.classList.add('scale-up-hor-leftt');

      secaoMarvel.classList.remove('scale-up-hor-leftt');
      secaoMarvel.classList.add('scale-up-hor-rightt');
    } else {
      secaoDC.classList.add('scale-up-hor-rightt');
      secaoDC.classList.remove('scale-up-hor-leftt');

      secaoMarvel.classList.remove('scale-up-hor-leftt');
      secaoMarvel.classList.add('scale-up-hor-rightt');
    }
  } catch (error) {
    console.error('Erro ao aplicar a animação:', error);
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

    // Chama a função para atualizar as porcentagens na interface
    atualizarPorcentagens();

  } catch (error) {
    console.error('Erro ao reiniciar a votação:', error);
  }
}

