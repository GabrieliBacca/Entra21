
let num = []
let impar= []
let par = []

for (let i = 1; i <= 50; i++) {
    num.push(i)
    if(i % 2 !== 0){
        impar.push(i)
    }
    if( i % 2 ==0){
        par.push(i)
    }
}

console.log(`Numeros impares: ${impar}`)
console.log(`Numeros pares: ${par}`)



