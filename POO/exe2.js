class Pessoa{
    constructor(nome,altura,peso){
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }

    dizerOi(){
        console.log(this.nome + ' disse oi')
    }

    calcularImc(){
        return this.peso / (this.altura**2)
    }
}

let p1 = new Pessoa('Sheila', 1.65, 65)
p1.dizerOi()

let p2 = new Pessoa('Shico', 1.52, 41)
p2.dizerOi()
console.log(p1.calcularImc())


//Criar a classe circulo com os atributos raio
//Criar o metado calcular Area que retorna o valor da area

class Circulo{
    constructor(raio){
        this.raio = raio;
    }

    calcularArea(){
        return (this.raio**2) * Math.PI;
    }
}

let c1 = new Circulo(5)
console.log(c1.calcularArea())