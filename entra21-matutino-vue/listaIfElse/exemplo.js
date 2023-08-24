
const pacote = require('prompt-sync')
const prompt = pacote()

//regex
let letra = prompt('letra: ').toUpperCase()
console.log(/a-u/.test(letra) ? 'vogal' : 'consoante')