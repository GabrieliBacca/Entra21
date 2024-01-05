/*Classe Produto:
Crie uma classe chamada Produto para modelar informações sobre um produto.
Crie um pequeno sistema de compra simples.
Atributos: Nome, Preço, Quantidade em Estoque
Métodos: atualizarEstoque e exibirDetalhes.
*/

class Produto{
    constructor(nome, preco, qtd){
        this.nome = nome,
        this.preco = preco,
        this.qtd = qtd
    }

    exibirDetalhes(){
        let produto = [this.nome, this.preco, this.qtd]
        alert(produto);
    }

    atualizarEstoque(quanti){
        this.qtd += quanti
    }
}
//fluxo

let nome = prompt('Nome produto: ')
let preco = Number(prompt('Preço produto: '))
let qtd = Number(prompt('Quantidade estoque: '))

let p = new Produto(nome, preco, qtd)

while(true){
    let menu = Number(prompt('1- Atualizar Estoque 2- Exibir Detalhes'))
    if(menu==1) {
       quanti = Number(prompt('Quantidade: '))
       p.atualizarEstoque(quanti)
    }
    else if(menu==2) p.exibirDetalhes()
    else break;
}

