const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'votingDB'
});

connection.connect((err) => {
    if (err) {
        console.log('Erro na conexão com o banco: ' + err);
    } else {
        console.log('Conectado ao MySQL');
    }
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/vote', (req, res) => {
    const selectedAnimal = req.body.animal;

    const sqlInsert = 'INSERT INTO votos (animal) VALUES (?)';
    connection.query(sqlInsert, [selectedAnimal], (err, result) => {
        if (err) {
            console.error('Erro ao inserir voto no banco de dados:', err);
            res.status(500).json({ error: 'Erro interno do servidor' });
        } else {
            console.log('Voto inserido com sucesso no banco de dados');
            res.json({ success: true });
        }
    });
});

app.get('/results', (req, res) => {
    connection.query('SELECT COUNT(*) as total, animal FROM votos GROUP BY animal', (err, results) => {
        if (err) {
            console.log('Erro na consulta: ' + err);
            res.status(500).json({ error: 'Erro na consulta do banco de dados' });
        } else {
            const totalVotes = results.reduce((acc, cur) => acc + cur.total, 0);
            const percentageResults = results.map((result) => ({
                animal: result.animal,
                percentage: (result.total / totalVotes) * 100
            }));

            res.json({ totalVotes, results: percentageResults });
        }
    });
});

app.listen(PORT, () => {
    console.log('Servidor rodando na porta ' + PORT);
});
