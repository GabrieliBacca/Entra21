//console.log("Hello World")

let elemento = document.getElementById("titulo")
console.log("elemento selecionado " +elemento)
console.log(elemento.innerHTML)

let mostrar = document.getElementById("texto")
console.log(mostrar.innerText)

const nome = document.getElementById("nome")
console.log(nome.value)

function pegarValor(){
    elemento.innerHTML = nome.value
}
