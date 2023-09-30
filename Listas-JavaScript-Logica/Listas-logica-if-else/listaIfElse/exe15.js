const pacote = require('prompt-sync')
const prompt = pacote()

let n1 = Number(prompt("Digite o primeiro lado: "))
let n2 = Number(prompt("Digite o segundo lado: "))
let n3 = Number(prompt("Digite o terceiro lado: "))

if((n1 + n2) > n3 && (n1+n3) > n2 && (n2+n3) > n1){
    if(n1 == n2 && n1==n3 && n2==n3){
       console.log("Triângulo Equilátero")
    }else if(n1 == n2 || n1==n3 || n2==n3){
        console.log("Triângulo Isósceles")
    }else if(n1!=n2 && n2!=3 && n2!=n3){
        console.log("Triângulo Escaleno")
    }
}else{
    console.log("Não formam um triângulo")
}