//Sem utilizar json e lista, permita o usuario cadastrar uma lista de compras
// (nao use prompt) Vai ser usado: input, button, ul, li

const novoItem = () => {
    let texto = document.querySelector('.inp-item').value
    let li = document.createElement('li')
    li.innerText = texto
    document.querySelector('.lista-itens').appendChild(li)
}

document.querySelector('.novo-item').addEventListener('click', novoItem)