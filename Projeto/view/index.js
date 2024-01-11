
// fetch('http://localhost:3000/filme').then(dados => dados.json())

fetch('http://localhost:3000/votacao').then(votos => votos.json())

//envia voto para API
async function votar(universo){
    try{
        const response = await fetch('http://localhost:3000/votar',{
            method: 'POST',
            headers:{
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify({ [universo]: 1})
        })
        const data = await response.json()
        alert('Voto inserido com sucesso!')
        votos +=1
        verificarVotos() //ele ja chama o verificar no index.html, pq chamar aqui tambem? VERIFICAR
    }catch (error){
        alert('Erro ao votar', error)
    }
}

// Função para verificar se existem votos computados e exibir o botão de resultado
async function verificarVotos(){
    if(votos>0){
        document.getElementById('resultado').style.display = 'block'
    }
}

// ver se consigo faxzer de outra forma
function abrirResultados(){
    window.location.href = 'resultados.html'
}

//Conseguir a contagem atual da votação
let votacaoAtual = 0
async function obterVotacao(){
    try{
        const response = await fetch('http://localhost:3000/votacao')
        console.log(response)
        const data = await response.json()
        console.log('Contagem atual da votação', data)
        votacaoAtual = data.total
        verificarVotos() //VERIFICAR SE PRECISA AQUI

    }catch(error){
        console.log('Erro ao obter votacso: ', error)
    }
}

function voltarVotar() {
    window.location.href = "votar.html";
}
