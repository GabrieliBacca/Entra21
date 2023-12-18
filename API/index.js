const express = require('express')
const server = express()
//cria uma aplicacao express

server.listen(3000, () => {
    console.log('O servidor está funcionando')
})
//quando conectar com o servidor local vai rodar uma func anonima

server.get('/', (req,res) => {
    return res.json({mensagem: 'A API ESTA FUNCIONANDO'})
})

server.get('/usuario', (req,res) => {
    return res.json({usuario: 'Cedrico Cedro'})
})

server.get('/filme', (req,res) => {
    return res.json({
        titulo: "Gabis",
        duracao: "3h15min",    
        descricao: "Um drama dirigido por Steven Spielberg, baseado na história real de Oskar Schindler, que salvou a vida de mais de mil judeus durante o Holocausto."
    })
})

