let req = require('prompt-sync')
let prompt = req()
// 28.	O Hipermercado Tabajara está com uma promoção de 
// carnes que é imperdível. Confira:
//                      Até 5 Kg           Acima de 5 Kg
//  File Duplo      R$ 4,90 por Kg          R$ 5,80 por Kg
//  Alcatra         R$ 5,90 por Kg          R$ 6,80 por Kg
// 	  Picanha         R$ 6,90 por Kg          R$ 7,80 por Kg
// Para atender a todos os clientes, 
// cada cliente poderá levar apenas um dos tipos de carne da promoção, 
// porém não há limites para a quantidade de carne por cliente. 
// Se compra for feita no cartão Tabajara o cliente receberá ainda 
// um desconto de 5% sobre o total da compra. Escreva um programa que 
// peça o tipo e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, 
// contendo as informações da compra: tipo e quantidade de carne, preço total, 
// tipo de pagamento, valor do desconto e valor a pagar.

console.log('Lista de Produtos')
console.log('1 - File Duplo\n2 - Alcatra\n3 - Picanha')



const tipoCarne = Number(prompt('Digite o número correspondete ao tipo da carne: '))
const quantidade = Number(prompt('Digite a quantidade de carne em KG: '))
const cartao = prompt('A compra será feita em cartão?')

let precoKG, tipoCarneTexto

if (tipoCarne == 1){
    precoKG = quantidade <= 5 ? 4.9 : 5.80
    tipoCarneTexto = 'Filé Duplo'
}else if(tipoCarne == 2){
    precoKG = quantidade <= 5 ? 5.9 : 6.80
    tipoCarneTexto = 'Alcatra'
}else if(tipoCarne == 3){
    precoKG = quantidade <= 5 ? 6.9 : 7.80
    tipoCarneTexto = 'Picanha'
}else{
    console.log('Entrada Inválida')
    process.exit(1)
}

let valorTotal = precoKG * quantidade

let d = 0

if(cartao.toLowerCase() == 'sim') d = valorTotal * (0.05)


let valorFinal = valorTotal - d

console.log('\nNota Fiscal: ')
console.log(`Produto: ${tipoCarneTexto}`)
console.log(`Quantidade: ${quantidade}`)
console.log(`Preço Final: R$${valorFinal}`)