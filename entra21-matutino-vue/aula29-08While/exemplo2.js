const pacote = require('prompt-sync')
const prompt = pacote()

let quantidadeBolacha = 10
while(quantidadeBolacha > 0){
    quantidadeBolacha--
    console.log('comi uma bolacha')
    console.log('ainda tem no pacote' +quantidadeBolacha + '\n') 
}