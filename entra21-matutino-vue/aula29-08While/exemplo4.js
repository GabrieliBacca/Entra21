const req = require('prompt-sync')
const prompt =  req()


let num = 0

while(num == '0'){
    num = prompt('Digite 0  para repetir ou qualquer outro numero para parar')
}

console.log('Você saiu do loop')