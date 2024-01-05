// number = valores numericos (reais e inteiros)
// string = caracter
// boolean = true e false

const idade : number = 10
console.log(idade)
console.log('oii')

//soma
let n1 : number = 7
let n2 : number = 1
let soma : number = n1 + n2

console.log(soma)

// Tipos variaveis

// inferencia 
let nome1 = 'jorge'

// anotacao
let nome : string = 'ana'

function mostrarNome(nome:string){
    console.log(`Seu nome é ${nome}`)
}

mostrarNome('gabi')

function calcularAreaQuadrado(lado:number) : number{ // tipo do retorno do lado 
    return lado * lado
}

console.log(calcularAreaQuadrado(20))

// Criar uma fuincao que retorne o volume de um cilindro

function volumeCilindro(altura:number, raio:number) : number{
    return Math.pow(raio,2) * altura * Math.PI;
}

console.log(volumeCilindro(2,3))

let teste : string | number | boolean

teste = 0
teste = 'a'
console.log(teste)

let isAdmin : boolean = true

console.log(typeof isAdmin)

let numeros: number[]  = [1,6,9,18,64]
console.log(numeros[1])

//objeto
// titulo e genero sao prop = propriedades
const livro :{titulo: string; genero: string} = 
{
    titulo: 'pequeno principe', genero: 'fanatasia'
}

console.log(livro.titulo)

//criar um objeto filme, definir propiedades
type filme = {titulo: string; duracao: number; classificacao: number; diretor: string}

const filme1 : filme =  {
    titulo: 'senhor dos aneis',
    duracao: 150,
    classificacao: 18, 
    diretor: 'aquele cara'
}



//jason

const filmes: filme[] =[
    filme1,
   {
    titulo: 'senhor dos aneis',
    duracao: 150,
    classificacao: 18, 
    diretor: 'aquele cara'
   }
]

// exercicio animal

type animal = {nome:string; raca: string; idade: number}

const animais: animal[] = [
    {
        nome:'toia',
        raca: 'gato',
        idade:4
    },
    {
        nome:'florzinha',
        raca: 'gata',
        idade:3
    },
    {
        nome:'luna',
        raca: 'cachorra',
        idade:10
    }
]
animais.forEach(animal => console.log(animal))