// const lista = [
//     {
//         nome: 'Marcia',
//         idade: 20,
//     },
//     {
//         nome:'Silvana',
//         idade:30
//     }
// ]

for (let i = 0; i < lista.length; i++) {
    const pessoa = lista[i];
    console.log(pessoa)
}

lista.forEach(pessoa =>{
    console.log(pessoa)
})




lista.forEach(pessoa =>{
    const elementoHTML = document.createElement('h1')
    elementoHTML.textContent = pessoa.nome
    
    document.body.appendChild(elementoHTML)
})

const lista = document.getElementById("pessoas")

listaDePessoas.forEach(pessoa => {
    const item = document.createElement('li')
    item.innerText = `${pessoa.nome}, ${pessoa.idade} anos`
   
    item.addEventListener("click", e =>{

        const url = 'https://google.com'
        window.open(url,'_blank')

    })
    lista.appendChild(item)
})
