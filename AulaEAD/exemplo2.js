let paginasInstagram =[
    {
        usuario: 'entra21.blusoft',
        seguidores: 6796,
        posts: 5156
    },
    {
        usuario: 'netflix',
        seguidores: 33100000,
        posts: 7684
    },
    {
        usuario: 'prowayinfo',
        seguidores: 119000,
        posts: 1384
    }
]

paginasInstagram.forEach(pagina =>{
    const li = document.createElement('li')

    li.innerText = pagina.usuario
    li.addEventListener("click", e =>{
        const url = `https://www.instagram.com/${pagina.usuario}/`
        window.open(url, '_blank')
    })
    document.getElementById('paginas').appendChild(li)
})