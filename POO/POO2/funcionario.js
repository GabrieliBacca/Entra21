/*Classe Funcionário:
Crie uma classe chamada Funcionário para modelar informações sobre um funcionário.
Atributos: Nome, Cargo, Salário, Departamento
Métodos: promover e exibirDetalhes.
*/

class Funcionario{
   constructor(nome, cargo, salario, departamento){
        this.nome = nome,
        this.cargo = cargo
        this.salario = salario
        this.departamento = departamento
   }

   exibirDetalhes(){
    let funcionario = [this.nome, this.cargo, this.salario, this.departamento]
    return alert(funcionario)
   }

   promover(novaFuncao){
    this.cargo = novaFuncao
   }

   cadastrar(){
    this.nome = prompt('Nome: ')
    this.cargo = prompt('Cargo: ')
    this.salario = prompt('Salario: ')
    this.departamento = prompt('Departamento: ')
   }

}

let funcionario = new Funcionario()


while(true){
    let menu = prompt('1-Promover 2- Exibir Detalhes 3- Cadastrar')
    if(menu=='1') {
        novaFuncao = prompt('Informe a nova funcao: ')
        funcionario.promover(novaFuncao)
    }
    
    else if(menu=='2') funcionario.exibirDetalhes()

    else if(menu=='3'){
        funcionario.cadastrar()
    }
    else break
}
