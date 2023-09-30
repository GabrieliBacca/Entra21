const req = require('prompt-sync')
const prompt =  req()

let menu = '1'

while(menu != '0'){
    menu = prompt('1-Executar 0-Sair ')
    if(menu == 1){
        let n1= Number(prompt('Digite o numero1'))
        console.log(n1 % 2 == 0 ? 'par':'ímpar')       
    }else if(menu == 0){
        console.log('Encerrando sistema...')
    }
}