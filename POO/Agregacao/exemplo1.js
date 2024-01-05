class Mae{
    constructor(nome){
        this.nome = nome
    }
}

class Filho{
    constructor(nome,mae){
        this.nome = nome
        this.mae = mae
    }
}

let m= new Mae('Albertina')

console.log(m.nome)

let f = new Filho('Beto', m)

console.log(f)
