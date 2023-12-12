// Criar um sistema de carro com: id, marca, modelo, ano, potencia
// 1- Cadastrar novo carro
// 2- Ver carros cadastrados
// 3- Calcular media de potencia
// 4- Excluir carro
// 5- Sair

let carros = []

while(true){
    let menu = prompt(`1- Cadastrar novo carro\n2- Ver carros cadastrados\n3- Calcular media de potencia\n4- Excluir carro\n5- Sair`)

    if(menu=='1'){
        let id = prompt('Id: ')
        let marca = prompt('Marca: ')
        let modelo = prompt('Modelo: ')
        let ano = prompt('Ano: ')
        let potencias = []

        for(let i=0;i<1;i++){
            potencias[i] =Number(prompt('Potencia: '))
        }

        let i;
        let carro ={
            id: i,
            marca: marca,
            modelo: modelo,
            ano: ano,
            potencia: potencias
        }
        carros.push(carro)
    }


    else if(menu=='2'){
        carros.forEach(c => {
            console.log(c)
        });
    }

    else if(menu=='3'){
        let soma =0
        let media = 0

            for(let i=0; i < carros.length;i++){
                soma += carros.carro.potencias[i]
            }
            media = soma/carro.potencia.length
        alert(`Media: ${media} `)
    }else if(menu==4){
let id = prompt('Digite o ID do carro a ser excluido: ')

    }
    else if(menu=='5') break
}