/*Classe Conta Bancária:
Crie uma classe chamada ContaBancaria para modelar uma conta bancária.
Atributos: Titular, Saldo, Número da Conta
Métodos: depositar, sacar e mostrarSaldo.
*/

class ContaBancaria{
    constructor(titular, numConta){
        this.titular = titular;
        this.saldo = 0;
        this.numConta = numConta;
    }

    depositar(valor){
        return this.saldo += valor;
    }

    sacar(valor){
        if(valor > this.saldo){
            return false;
        }else{
            this.saldo -= valor;
            return true;
        }
    }

    mostrarSaldo(){
        return this.saldo
    }
}

gabi = new ContaBancaria("Gabrieli", 133232)
console.log(gabi)
gabi.depositar(20)
gabi.mostrarSaldo()
gabi.sacar(10)
gabi.mostrarSaldo()

//fluxo de sistema

let titular = prompt('Nome: ')
let numConta = Number(prompt('Num da conta: '))

let cb = new ContaBancaria(titular,numConta)
alert(`Bem vindo, ${cb.titular}`)

while(true){
  
    let menu = prompt('1-Depositar 2- Sacar 3- Ver saldo 4-Sair')
    let valor=0

    switch(menu){
        case '1':
           valor = Number(prompt('Digite o valor a ser depositado'))
            if(confirm(`Confirma o o deposito de R$ ${valor}?`)){
                alert('Deposito efetuado com sucesso')
                cb.depositar(valor)
            }else{
                alert('Deposito cancelado')
            }
        break
        case '2':
            valor = Number(prompt(`Saldo atual ${cb.mostrarSaldo()}\n Digite o valor a ser sacado`))
            if(cb.sacar(valor) == true){
                alert(`Saque de R$ ${valor} efetuado com sucesso`)
            }else{
                alert('Saldo inválido')
            }
            break;
        case '3':
            alert(`Saldo atual: R$ ${cb.mostrarSaldo()} `)
            break
        case '4':
            alert('Saindo...') 
            break  
        default:
            alert('Entrada invalida')
            break
    }
    if (menu==4) break;
  


}