// Criar um sistema de carro com: id, marca, modelo, ano, potencia
// 1- Cadastrar novo carro
// 2- Ver carros cadastrados
// 3- Calcular media de potencia
// 4- Excluir carro
// 5- Sair


let carros = []
let i = 0
while(true){
    let menu = prompt('1-Novo Carro\n2-Ver Carros\n3-Media Potencia\n4-Excluir Carro\n5-sair')

    switch(menu){
        case '1':
            i++
            let carro = {
                id: i,      
                modelo: prompt('MODELO:'),
                marca: prompt('MARCA: '),
                ano: prompt('ANO: '),
                potencia: Number(prompt('POTENCIA: '))
            }
            carros.push(carro)
        break;

        case '2':
            let texto = ''
            carros.forEach(carro => {
                texto += `Modelo: ${carro.modelo} Marca: ${carro.marca}\n`
            });
            alert(texto)
        break;

        case '3':
            let soma = 0
            carros.forEach(carro => {
                soma += carro.potencia
            });
            // for (let i = 0; i < carro.length; i++) {
            //     soma+= carro.potencia;               
            // }
            alert(`Media de Potencia de todos os carros: ${soma/carros.length}HP`)
        break;

        case '4':
            let id = Number(prompt('Digite o ID do carro a ser excluido'))
            if(confirm(`Deseja excluir o carro com ID: ${id}?`)){           
                carros = carros.filter( carro => carro.id != id)
                alert('Carro excluído com sucesso')
            }
    }

    if(menu == '5') break;
}