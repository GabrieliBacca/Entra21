function calcular(){
    const r = Number(document.getElementById("r").value)
    document.getElementById("resultado").innerHTML = "Área do círculo: " 
    + (Math.PI * Math.pow(r, 2)).toFixed(2) + ' m2';
}