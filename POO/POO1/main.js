class Pessoa{
    //Classe tem uma funcao consturctor, que tem 3 parametros, que sao os atributos
    constructor(nome,idade,genero) {
        // this.nome é o atributo que vai ser igual ao parametro nome
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
    }
}

let p1 = new Pessoa('Maria',18, 'F') // objeto que é uma instacia de Pessoa, novo registro
console.log(p1.nome)
//posso criar um p2 direto, tambem é um objeto, mas nao é uma instacia da classe pessoa, é um json


//Exercicio: Abstrair a entidade carro, criar a classe e dois objetos instaciados

class Carro{
    constructor(nome, ano, cor){
        this.nome = nome
        this.ano = ano
        this.cor = cor
    }
}

c1 = new Carro('Onix', 2015, 'vermelho')
c2 = new Carro('Spin', 2008, 'branco')

console.log(c1)
c2.nome = 'honda'
console.log(c2)

// Abstrair uma entidade cidade, 8 atribustos e criar 3 objetos

class Cidade{
    constructor(id, nome, populacao, cep, estado, regiao, qtd_bairro, ponto_turistico, tipo){
        this.id = id;
        this.nome = nome;
        this.populacao = populacao;
        this.cep = cep;
        this.estado = estado;
        this.regiao = regiao;
        this.qtd_bairro = qtd_bairro;
        this.ponto_turistico = ponto_turistico;
        this.tipo = tipo;
    }
}

ilhota = new Cidade(1,'Ilhota', 17.600, 88320000, 'SC', 'Vale do Itajai', 19,'Cachoeira do Bau', 'Rural');
floripa = new Cidade(2,'Florianopolis', 341.781, 89990000, 'SC', 'Grande Floriapolis', 49,'Mercado publico', 'Urbano');
timbo = new Cidade(1,'Timbo', 46.099, 99920000, 'SC', 'Vale do Itajai', 14,'Jardim botanico', 'Rural');

console.log(ilhota, floripa, timbo)

let listaCidade = [ilhota, floripa, timbo];
console.log(listaCidade)

listaCidade.forEach(cidade => console.log(cidade))

