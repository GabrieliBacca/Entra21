const pacote = require('prompt-sync')
const prompt = pacote()

// se valor do produto maior que 100, dar um desconto de 30%

let preco = Number(prompt("Digite o preço do produto: "))

if(preco >=100){
    desconto = (preco * 0.3)
    preco = preco - desconto
    console.log(`Desconto de 30% aplicado: R$${desconto}`)
    console.log(`Valor com desconto R$ ${preco}`)
}else{
    console.log("O produto não possuiu desconto")
}