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

    const porMarvel = document.getElementById("porcentagem-marvel");
    const porDC = document.getElementById("porcentagem-dc");

    porMarvel.innerText = `${porcentagemMarvel}%`;
    porDC.innerText = `${porcentagemDC}%`;
  } catch (error) {
    console.error('Erro ao atualizar as seções:', error);
  }
}


// Define a classe de animação com base nos votos
async function aplicarAnimacao() {
  const secaoDC = document.getElementById('secao-dc');
  const secaoMarvel = document.getElementById('secao-marvel');

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