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
        this.armazenamentoUtilizado = 15
        this.lista = ['telefone']
    }

    verificarArmazenamento(tamanho){
        let livre = this.armazenamento - this.armazenamentoUtilizado
        if(tamanho>livre) return false
        else return true
    }

    exibirInfo() {
        alert(`Marca: ${this.marca}\nModelo: ${this.modelo}\nArmazenamento: ${this.armazenamento}GB\nAplicativos: ${this.lista.join(', ')}`);
    }

    instalarApp(){
        let novoApp = prompt('Nome do aplicativo: ')
        let tamanho = Number(prompt('Tamanho do aplicativo: '))

        if(!this.verificarArmazenamento(tamanho)){
            alert('Armazenamento insuficiente')
        }else{
            this.lista.push(novoApp)
            this.armazenamentoUtilizado += tamanho
            alert('App instalado com sucesso')
        }
    }
}

let celular = new Celular('Apple', 'Iphone', 50)
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