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

}


let nome = prompt('Nome: ')
let cargo = prompt('Cargo: ')
let salario = prompt('Salario: ')
let departamento = prompt('Departamento: ')
let funcionario = new Funcionario(nome, cargo,salario,departamento)

while(true){
    let menu = prompt('1-Promover 2- Exibir Detalhes')
    if(menu=='1') {
        novaFuncao = prompt('Informe a nova funcao: ')
        funcionario.promover(novaFuncao)
    }else if(menu=='2') funcionario.exibirDetalhes()
    else break
}
