"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server = (0, express_1.default)();
const PORT = 3000;
// Middleware para processar dados do formulário
server.use(express_1.default.urlencoded({ extended: true }));
const path_1 = __importDefault(require("path"));
server.get('/form', (req, res) => {
    const filePath = path_1.default.join(__dirname, 'form.html');
    res.sendFile(filePath);
});
server.post('/submit', (req, res) => {
    console.log('Chegou à rota POST');
    const username = req.body.username;
    const password = req.body.password;
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
    res.send(htmlResponse);
});
server.get('/', (req, res) => {
    res.send('rota padrao');
});
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
