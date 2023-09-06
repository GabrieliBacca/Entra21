prompt = require('prompt-sync') ()

let numeros =[]
let numeros2 = []

for(let i=0; i<10;i++){
    numeros[i]= Number(prompt("Digite um numero: "))
}

for (let i= 0; i<10;i++){
    if(i%2 == 0){
        numeros2[i] = numeros[i]/2
    }else{
        numeros2[i] = numeros[i]*3
    }
}

for(let i =0; i< numeros2.length; i++){
    console.log(numeros2[i])
}