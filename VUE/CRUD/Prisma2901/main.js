// para dar o FETCH no front... exemplo pra usar a API ... e alterar a classe TESTE 

fetch('http://localhost:8000/api/author/')
    .then(response => response.json())
    .then(dados => {
        dados.array.forEach(author => {
            console.log(author)
        });
    })

// fazer o fetch com o post 

fetch('http://localhost:8000/api/author/', {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        firsName: "Jonas",
        lastName: "Jenio"
    })
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao enviar dados'); // tratamento de erro, se necessário
        }
        return response.json(); // processamento da resposta, se necessário
    })
    .then(data => {
        console.log('Dados recebidos:', data); // exibindo os dados recebidos, se necessário
    })
    .catch(error => {
        console.error('Erro:', error);

    })
