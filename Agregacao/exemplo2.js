class Endereco{
    constructor(rua,bairro,cidade,estado){
        this.rua=rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
    }
}

class Funcionario{
    constructor(nome,cargo,salario,endereco){
        this.nome = nome
        this.cargo = cargo
        this.salario = salario
        this.endereco = endereco
    }
}

let e1 = new Endereco('Rua 7', 'Centro', 'Blumenau', 'SC')

let f1 = new Funcionario('Camila', 'Manicure', '15670', e1)
console.log(f1.endereco.rua)
//console é um objeto, log é metodo

let endereco = {
    rua: 'Rua 7',
    bairro: 'Centro',
    cidade: 'Blumenau',
    estado: 'SC'
}

let funcionario = [{
    nome: 'Randolfo Ragra',
    cargo: 'Podologo',
    salario: 1200,
    endereco: endereco,
},
{

}]

//JSON E FOREACH
let funcionarios = []

while(true){

    let menu = prompt('1-Novo Funcionario \n 2-Ver Funcionários\n 3-Sair')

    if(menu =='1'){
        let nome = prompt('Digite o nome: ')
        let cargo = prompt('Digite o cargo: ')

        let funcionario ={
            nome: nome,
            cargo: cargo,
        }

        funcionarios.push(funcionario)
    }
    else if(menu =='2'){
        funcionarios.forEach(func =>{
            console.log(`Nome: ${func.nome} \n Cargo: ${func.cargo}`)
        })
    }
    else if(menu=='3') 
    break
}