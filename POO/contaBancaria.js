/*Classe Conta Bancária:
Crie uma classe chamada ContaBancaria para modelar uma conta bancária.
Atributos: Titular, Saldo, Número da Conta
Métodos: depositar, sacar e mostrarSaldo.
*/

class ContaBancaria{
    constructor(titular, saldo, numConta){
        this.titular = titular;
        this.saldo = saldo;
        this.numConta = numConta;
    }

    depositar(deposito){
        return this.saldo += deposito;
    }

    sacar(saque){
        return this.saldo -= saque;
    }

    mostrarSaldo(){
        console.log(this.saldo)
    }
}

gabi = new ContaBancaria("Gabrieli", 100, 133232)
gabi.mostrarSaldo()
gabi.depositar(20)
gabi.mostrarSaldo()
gabi.sacar(50)
gabi.mostrarSaldo()
