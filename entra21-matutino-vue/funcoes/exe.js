//Crie uma função que imprima "Olá, mundo!" na tela.
function hello(){
    console.log("Olá, mundo!");
}
hello()

//Crie uma função que receba um número como parâmetro e retorne o seu dobro.
function dobro(n1){
    return n1*n1
}
console.log(dobro(2))

//Crie uma função que receba dois números como parâmetros e retorne a soma deles.
function soma(n1,n2){
    return n1+n2
}
console.log(soma(2,9))


//Crie uma função que receba uma string como parâmetro e retorne a quantidade de caracteres dela.

function qtdCaracter(string) {
    let nome = string.length
    return nome
}

console.log(qtdCaracter('gabi'));

//Crie uma função que receba uma string como parâmetro e retorne a primeira letra dela.

function primeiraletra(string) {
    return string[0]
}
 console.log(primeiraletra("gabi"))

 //Crie uma função que receba uma string como parâmetro e retorne a última letra dela.

 function ultimaLetra(string){
    return string[string.length - 1]
 }

 console.log(ultimaLetra('gabi'))

 //Crie uma função que receba uma string como parâmetro e retorne a string invertida.
 function invertida(string){
    return string.split('').reverse().join('');
 }
 console.log(invertida("gabi"))

 //Crie uma função que receba uma string como parâmetro e retorne a string sem espaços em branco.

 function espacoEmBranco(string){
    return string.replaceAll(" ","")
 }
 console.log(espacoEmBranco("cavalo branco"))

 //Crie uma função que receba um número como parâmetro e retorne o seu quadrado.

 function quadrado(num){
    return num*num
 }
 console.log(quadrado(2))