import express, { Request, Response } from 'express'
const server = express()
const PORT = 3000

// Middleware para processar dados do formulário
server.use(express.urlencoded({ extended: true }))

import path from 'path'

server.get('/form', (req: Request, res: Response) => {
    const filePath = path.join(__dirname, 'form.html')
    res.sendFile(filePath)
})

server.post('/submit', (req: Request, res: Response) => {
    console.log('Chegou à rota POST')

    const username = req.body.username
    const password = req.body.password

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
    res.send(htmlResponse)
});

server.get('/', (req: Request, res: Response) => {
    res.send('rota padrao')
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
