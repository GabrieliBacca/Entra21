const botao = document.querySelector('#somar')

botao.addEventListener('click', () => {
    const n1 = Number(document.querySelector('#n1').value)
    const n2 = Number(document.querySelector('#n2').value)
    document.querySelector('#resultado').value = n1 + n2
})

// Area de um dodecaedro A = (a*P)/2 

const button = document.querySelector('#calcular')

button.addEventListener('click', () => {
    const a = Number(document.querySelector('#a').value)
    const p = Number(document.querySelector('#p').value)
    document.querySelector('#resul').value = (( (a*p)/2) * 12).toFixed(2) + 'm²'
})

//  Quadrado rosa virar um circulo amarelo

const quadrado = document.querySelector('.quadrado')

quadrado.addEventListener('click', () => {
    quadrado.classList.toggle("amarelo")
})