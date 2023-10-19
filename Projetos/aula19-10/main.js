let vetor = [1,3,4,57,90]

for(let i=0; i<vetor.length; i++){
    const num = vetor[i];
    console.log(num)
}

//for each acessar itens de vetor e de lista
vetor.forEach(item => console.log(item))

const botao = document.querySelector("#btn")

function mostrarOi(){
    console.log("hello world")
}

botao.addEventListener('click', mostrarOi)
//precisa dois parametros, evento e funcao

botao.addEventListener('mouseenter', mostrarOi)

//posso criar uma ação local

botao.addEventListener('click', (e) =>{
    console.log(e)
})

botao.addEventListener('click', (e) =>{
    console.log(e.target)
})

const h1 = document.querySelector("#h1")
h1.addEventListener('mouseenter', (e) => {
    e.target.innerHTML = "Tchau gente"
})

const input = document.querySelector("#inpt")
input.addEventListener('change', (e) => {
   h1.innerHTML = e.target.value
})