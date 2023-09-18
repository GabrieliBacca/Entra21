const N = Math.floor(Math.random() * 1000)

console.log('Numeros primos entre 1 e '+N)

let contadorDivisao = 0
let primos = []
let cont = 0

for(let i=2; i<N;i++){
    let ePrimo = true
    for(let j=2; j<i;j++){
        contadorDivisao++
        if(i % j ==0){
            ePrimo = false
            break
        }
    }
    if(ePrimo){
        primos.push(num)
        //primos[cont] = i
        //cont++
    }
}


console.log(...primos)
console.log(`Numero de divisoes: ${contadorDivisao}`)


