const pacote = require('prompt-sync')
const prompt = pacote()

let sexo = prompt("Informe F - Feminino, M - Masculino, O - Outro: ")

if(sexo == "f" || sexo == "F"){
    console.log("feminino")
}else if(sexo == "m" || sexo == "M"){
    console.log("masculino")
}else if(sexo == "o" || sexo == "O"){
    console.log("outros")
}else{
    console.log("entrada invalida, digite novamente")
}
