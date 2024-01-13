const express = require('express')
const mysql = require('mysql2')
const app = express()


//Configurando conexcao com SQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234', 
    // senha do meu bd
    database: 'animeDB'
})

//Conectar com banco
connection.connect(err =>{
    if(err){
        console.log('Erro na conexao com o banco' + err)
    }else{
        console.log('Conectado ao Mysql')
    }
})

app.get('/anime', (req,res) =>{
    connection.query('SELECT * FROM anime', (err, results) =>{

        if(err){
            console.log('erro na consulta' + err)
            res.status(500).send('erro na consulta do banco de dados')
        }else{

            //exibir o resultado da consulta no http
            console.log(results)
            res.json(results)
        }


    })
})

app.get('/personagem', (req, res) =>{
    connection.query('select * from personagem', (err,results) =>{

        if(err){
            console.log('erro na consulta'+err)
            res.status(500).send('erro na consulta do bd')
        }else{
            console.log(results)
            res.json(results)
        }
    })
})

const PORT = 3000

app.listen(PORT, () =>{
    console.log('Servidor rodando')
})