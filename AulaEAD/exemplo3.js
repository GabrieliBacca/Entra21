// Criar um site que liste canais
// no youtube com as seguintes informações:
// -nome do canal
// -quantidade de inscritos
// -videos

// -Utilizando JSON deixar 5 canais salvos
// -Ao clicar em um botão, abrir a pagina
// do canal do youtube.

// DESAFIO:
// Permitir o usuario adicionar novos
// canais.
// Dica: Criar uma function "novoCanal" com 
// 3 prompts, que adiciona um novo item
// na lista de canais.

let canalYoutube = [
    {
        nome: 'CursoemVideo',
        qtdIncritos: 2140,
        videos: 1300,
    },
    {
        nome: 'gamerpatife',
        qtdIncritos: 2420,
        videos: 7700,
    },
    {
        nome: 'LofiGirl',
        qtdIncritos: 1370,
        videos: 125,
    }, 
    {
        nome: 'rafaellaballerini',
        qtdIncritos: 2890,
        videos: 82,
    },
    {
        nome: 'HISTORIARTE',
        qtdIncritos: 2700,
        videos: 19,
    },

]
atualizar() //se eu nao chamo aqui os que ja estao cadastrados naoaparecem

function atualizar(){
    const listaCanais = document.getElementById('canais')

    canalYoutube.forEach(canal =>{
        const li = document.createElement('li')
        const button = document.createElement('button');
    
    
        button.innerText = `Abrir ${canal.nome}`;
        button.addEventListener("click", e =>{
            const url = `https://www.youtube.com/@${canal.nome}/`
            window.open(url, '_blank')
        })
    
        li.appendChild(button);
        document.getElementById('canais').appendChild(li)
    })
}

//desafio
function novoCanal() {
    const nome = prompt("Nome do canal:")
    const qtdIncritos = Number(prompt("Quantidade de inscritos do canal:"))
    const videos = Number(prompt("Quantidade de vídeos do canal:"))

    const novoCanal = {
        nome: nome,
        qtdIncritos: qtdIncritos,
        videos: videos,
    }

    canalYoutube.push(novoCanal)
    atualizar()
}

const adicionarCanalBtn = document.getElementById('adicionarCanalBtn')
adicionarCanalBtn.addEventListener('click', novoCanal)