function gerar(){

    const nome = document.getElementById("nome").value
    const nome1 = document.getElementById("nome1") 
    nome1.innerHTML  += nome

    const valor = document.getElementById("valor").value
    const valor1 = document.getElementById("valor1")
    valor1.innerHTML += valor

    const qtd = document.getElementById("qtd").value
    const qtd1 = document.getElementById("qtd1")
    qtd1.innerHTML += qtd

    const cor = document.getElementById("cor").value
    const cor1 = document.getElementById("cor1")
    cor1.innerHTML += cor
}