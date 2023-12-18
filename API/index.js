const express = require('express')
const server = express()
const filmes = require('./src/data/filme.json')
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
    return res.json(filmes)
})

