function ficarVermelho(){
    //document faz referencia para todo o html
    //const botao = document.getElementById("btn")
    const botao = document.querySelector("#btn")
    botao.classList.toggle("vermelho") //add a classe vermelho
    //.toggle, se ela ja existe tira, se n adiciciona
}

function transformarCirculo(){
    const quadrado = document.querySelector(".quadrado")
    //se quero classe . \ id # que seleciolana usando as querys do css
    quadrado.classList.toggle("circulo")
}

// exercicio cores
function laranja(){
    const botao = document.querySelector(".quadrado1")
    botao.classList.toggle("laranja")
}

function vermelho(){
    const botao = document.querySelector(".quadrado1")
    botao.classList.toggle("vermelho")
}

function amarelo(){
    const botao = document.querySelector(".quadrado1")
    botao.classList.add("amarelo")
}

function verde(){
    const botao = document.querySelector(".quadrado1")
    botao.classList.toggle("verde")
}

function azul(){
    const botao = document.querySelector(".quadrado1")
    botao.classList.toggle("azul")
}

function azulMarinho(){
    const botao = document.querySelector(".quadrado1")
    botao.classList.toggle("azulMarinho")
}

function violeta(){
    const botao = document.querySelector(".quadrado1")
    botao.classList.toggle("violeta")
}

function mudarCor(cor){
    console.log(cor)
    document.querySelector(".quadrado1").classList.toggle(cor)
}

// +5 e -5
function aumentar(){
    const numero = Number(document.querySelector("#numero").value) 
    document.querySelector("#numero").value = numero + 5
}

function diminuir(){
    document.querySelector("#numero").value -=5
}

//potencia
function potencia(){
   const n1 = Number(document.querySelector("#n1").value)
   const n2 = Number(document.querySelector("#n2").value)

   const resultado = Math.pow(n1,n2)
   console.log(resultado)

   document.querySelector("#resultado").value =resultado
}

//soma
function soma(){
    const n1 = Number(document.querySelector('#n1').value)
    const n2 = Number(document.querySelector('#n2').value)
    const n3 = Number(document.querySelector('#n3').value)
    const n4 = Number(document.querySelector('#n4').value)

    const resultado = n1 + n2 + n3 + n4
    document.querySelector("#resul").value = resultado


}

function calcularTroco(){
    const pagamento = Number(document.querySelector('#pagamento').value)
    const resul = Number(document.querySelector('#resul').value)

    const troco = pagamento - resul


    if(pagamento<resul){
        alert('valor de pagamento insuficiente')
        //document.querySelector('#troco').value = 'valor insuficiente'
    }else{
        document.querySelector('#troco').value = troco

    }
}