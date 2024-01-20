// Importando o módulo express e os tipos Request e Response do TypeScript
import express, { Request, Response } from 'express';

// Criando uma instância do servidor express
const server = express();

// Definindo a porta na qual o servidor vai escutar
const PORT = 3000;

// Middleware para processar dados do formulário
server.use(express.urlencoded({ extended: true }));

// Rota para exibir o formulário
import path from 'path';

// ...

server.get('/form', (req: Request, res: Response) => {
    const filePath = path.join(__dirname, 'form.html');
    res.sendFile(filePath);
});


// Rota para processar os dados do formulário (método POST)
server.post('/submit', (req: Request, res: Response) => {
    console.log('Chegou à rota POST');

    // Capturando os dados do formulário do corpo da requisição
    const username = req.body.username;
    const password = req.body.password;

    // Construindo uma string HTML com os dados do formulário
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
    `;

    // Enviando a resposta HTML ao cliente
    res.send(htmlResponse);
});

// Rota padrão
server.get('/', (req: Request, res: Response) => {
    res.send('rota padrao');
});

// Iniciando o servidor na porta especificada
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
