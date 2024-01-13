const express = require('express')
const server = express()
const PORT = 3000

//processa dados do form, é um middleware
server.use(express.urlencoded({extended: true}))

//exibe form
server.get('/form', (req,res) => {
    res.sendFile(__dirname + '/form.html')
})

//post é a req para processar o form
server.post('/submit', (req, res) =>{
    const username = req.body.username
    const password = req.body.password

     // Construir uma string HTML com os dados do formulário
     const htmlResponse = `
     <html>
         <head>
             <title>Dados do Formulário</title>
         </head>
         <body>
             <h1>Dados do Formulário:</h1>
             <p>Nome de Usuário: ${username}</p>
             <p>Senha: ${password}</p>
         </body>
     </html>
 `

 // Enviar a resposta HTML ao cliente
 res.send(htmlResponse)
})

server.get('/', (req,res) =>{
    res.send('rota padrao')
})

server.listen(PORT, () =>{
    console.log("Server is running")
})