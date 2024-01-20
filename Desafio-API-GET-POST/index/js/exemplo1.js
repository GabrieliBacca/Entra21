"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importando o módulo express e os tipos Request e Response do TypeScript
const express_1 = __importDefault(require("express"));
// Criando uma instância do servidor express
const server = (0, express_1.default)();
// Definindo a porta na qual o servidor vai escutar
const PORT = 3000;
// Middleware para processar dados do formulário
server.use(express_1.default.urlencoded({ extended: true }));
// Rota para exibir o formulário
const path_1 = __importDefault(require("path"));
// ...
server.get('/form', (req, res) => {
    const filePath = path_1.default.join(__dirname, 'form.html');
    res.sendFile(filePath);
});
// Rota para processar os dados do formulário (método POST)
server.post('/submit', (req, res) => {
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
server.get('/', (req, res) => {
    res.send('rota padrao');
});
// Iniciando o servidor na porta especificada
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
