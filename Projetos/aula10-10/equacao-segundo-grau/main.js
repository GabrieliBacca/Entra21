function calcular() {
    const a = Number(document.getElementById("a").value)
    const b = Number(document.getElementById("b").value)
    const c = Number(document.getElementById("c").value)

    const delta = b * b - (4 * a * c)

    document.getElementById("delta").innerHTML = delta
}

