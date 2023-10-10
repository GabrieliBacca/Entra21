function calcular(){
    const peso = Number(document.getElementById("peso").value)
    const altura = Number(document.getElementById("altura").value)
    document.getElementById("resul").innerHTML = "IMC: " 
    +(peso* Math.pow(altura,2))
}