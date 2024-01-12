const express = require('express')
const app = express()
const PORT = 3000
const cors = require("cors")

app.use(express.json())
app.use(cors())

app.listen(PORT, () => {
    console.log('Servidor rodando na porta ' + PORT)
})

let votacao = {
    dc: 0,
    marvel: 0,
    total: 0
}

app.get('/', (req, res) => {
    return res.json({ mensagem: 'A API está funcionando' })
})


//rota para acompanhar votacao
app.get('/votacao', (req, res) => {
    return res.json(votacao)
})

app.post('/votar', (req, res) => {
    const { dc, marvel } = req.body;
    if (dc) {
        votacao.dc += dc;
    } else if (marvel) {
        votacao.marvel += marvel;
    }

    // Atualiza o total após verificar os votos em ambos
    votacao.total = votacao.dc + votacao.marvel;

    console.log(votacao);
    return res.json({ votacao });
});


//fazer a porcentagem
app.get('/porcentagemdc', (req, res) => {
    let dcporcentagem = votacao.total !== 0 ? ((votacao.dc / votacao.total) * 100).toFixed(2) : 0;
    return res.json(dcporcentagem);
});

app.get('/porcentagemmarvel', (req, res) => {
    let marvelporcentagem = votacao.total !== 0 ? ((votacao.marvel / votacao.total) * 100).toFixed(2) : 0;
    return res.json(marvelporcentagem);
});


app.post('/reset', (req, res) => {
    votacao.dc = 0;
    votacao.marvel = 0;
    votacao.total = 0;
    return res.json({ message: 'Contagem de votos reiniciada.' });
})
