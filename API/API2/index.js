const express = require('express')
const server = express()

const herois = require('./src/data/herois.json')

server.listen(8080, () => {
    console.log('Servidor on')
})

server.get('/', (req,res) => {
    return res.json({mensagem: 'A API ESTA FUNCIONANDO'})
})

server.get('/herois', (req,res) =>{
    return res.json(herois)
})


