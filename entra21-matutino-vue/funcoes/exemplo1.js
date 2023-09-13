function mostrarMeuNome() {
    console.log("meu nome é Gabi")
}
soma(20,80)//sem return
console.log(soma(20,80))//com return

const prompt = require('prompt-sync') ()
function soma(n1,n2){
    return n1+n2
}

function subtrair(n1,n2){
    return n1-n2
}

function multiplicacao(n1,n2){
    return n1*n2
}

function divisap(n1,n2){
    return n1/n2
}

let numero1 = Number(prompt("Digite um numero: "))
let numero2 = Number(prompt("Digite outro numero: "))

let menu = prompt('1-soma 2-Subtrair 3-Mutiplicar 4-Dvidir')
let resultado = 0
switch(menu){
    case '1':
        resultado = soma(numero1,numero2)
    break
    case '2':
        resultado= subtrair(numero1,numero2)
    break   
    case '3':
        resultado= multiplicacao(numero1,numero2)
    break
    case '4':
        resultado= divisap(numero1,numero2)
    break
           
}

console.log(resultado)