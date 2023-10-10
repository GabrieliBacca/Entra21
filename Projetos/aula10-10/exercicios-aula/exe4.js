function dolar(){
    const real = Number(document.getElementById("real").value)
    const resultado = real * 5.10
    document.getElementById("resul").innerHTML = "Dólar: " + resultado.toFixed(2)
}


function euro() {
    const real = Number(document.getElementById("real").value)
    const resultado = real * 6.20
    document.getElementById("resul").innerHTML = "Euro: " + resultado.toFixed(2)
}

function iene() {
    const real = Number(document.getElementById("real").value)
    const resultado = real * 0.047
    document.getElementById("resul").innerHTML = "Iene: " + resultado.toFixed(2)
}