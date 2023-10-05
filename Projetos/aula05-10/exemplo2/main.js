
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