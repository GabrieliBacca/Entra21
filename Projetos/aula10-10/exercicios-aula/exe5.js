function contarCaracteres() {
    const frase = document.getElementById("frase").value

    const numCaracteres = frase.length
    document.getElementById("resul").innerText = `A frase possui ${numCaracteres} caracteres`
}