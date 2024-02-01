// Tudo que vemos no postman vai para o front

fetch('http://localhost:8000/api/author/')
    .then(response => response.json())
    .then(dados => {
        console.log(dados)
    })
