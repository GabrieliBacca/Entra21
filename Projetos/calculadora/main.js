function insert(num){
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + num
}

function clean(){
    document.getElementById('resultado').innerHTML = ""
}


function back(){
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
}

function somar(){
    const n1 = Number(document.getElementById("n1").value)
    const n2 = Number(document.getElementById("n2").value)

    const soma = n1+n2

    const resul = document.getElementById("resul")
    resul.innerHTML  += soma
}

function multiplicacao(){
    const n1 = Number(document.getElementById("n1").value)
    const n2 = Number(document.getElementById("n2").value)

    const multi = n1*n2

    const resul = document.getElementById("resul")
    resul.innerHTML +=multi
}