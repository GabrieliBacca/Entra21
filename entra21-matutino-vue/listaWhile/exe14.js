prompt = require('prompt-sync')();

let par=0, impar=0
for(let i =0; i<10;i++){
    let num = Number(prompt(`Digite o ${i+1} número: `))
    if(num % 2 == 0){
        par++
    }else{
        impar++
    }
}

console.log(`Numeros pares: ${par}`)
console.log(`Numeros impares: ${impar}`)