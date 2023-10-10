function calcular() {
    const a = Number(document.getElementById("a").value)
    const b = Number(document.getElementById("b").value)
    const c = Number(document.getElementById("c").value)

    const delta = b * b - (4 * a * c)
    const x1 = (-b + Math.sqrt(delta)) / (2 * a)
    const x2 = (-b - Math.sqrt(delta)) / (2 * a)

    document.getElementById("delta").innerText += delta
    document.getElementById("x1").innerText += x1
    document.getElementById("x2").innerText += x2
}

