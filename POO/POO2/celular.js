/*Classe Celular:
Crie uma classe chamada Celular para modelar informações sobre um celular.
Atributos: Marca, Modelo, Armazenamento, Aplicativos instalados
Métodos: instalarAplicativo e exibirInformacoes.
*/

class Celular{
    constructor(marca, modelo,armazenamento){
        this.marca = marca,
        this.modelo = modelo,
        this.armazenamento = armazenamento
        this.lista = []
    }

    exibirInfo() {
        alert(`Marca: ${this.marca}\nModelo: ${this.modelo}\nArmazenamento: ${this.armazenamento}GB\nAplicativos: ${this.lista.join(', ')}`);
    }

    instalarApp(novoApp){
        this.lista.push(novoApp)
    }
}

let marca = prompt('Marca: ')
let modelo = prompt('Modelo: ')
let armazenamento = Number(prompt('Armazenamento: '))
let appInsta = prompt('Aplicativos Intalados: ').split(',')

let celular = new Celular(marca, modelo, armazenamento)
celular.lista = appInsta

while(true){
    let menu = prompt('1- Instalar Aplicativo 2- Exibir Informações')
    if(menu=='1'){
        let novoApp = prompt('Novo app: ')
        celular.instalarApp(novoApp)
    } else if(menu=='2'){
        celular.exibirInfo()
    }
    else break;
}