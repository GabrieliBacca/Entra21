function somar(){
    const n1 = Number(document.getElementById("n1").value)
    const n2 = Number(document.getElementById("n2").value)
    const soma = n1+n2
    console.log(soma)
    document.getElementById("resultado").innerHTML = soma
}