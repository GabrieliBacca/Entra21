const pacote = require('prompt-sync')
const prompt = pacote()

let sexo = prompt("Informe M- Matutino, V- Vespertino, N- Noturno: ")

if(sexo == "m" || sexo == "m"){
    console.log("Bom dia")
}else if(sexo == "v" || sexo == "V"){
    console.log("boa tarde")
}else if(sexo == "n" || sexo == "N"){
    console.log("boa noite")
}else{
    console.log("entrada invalida, digite novamente")
}
