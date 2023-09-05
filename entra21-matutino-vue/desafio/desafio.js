prompt = require('prompt-sync') ()

const deuses = ['Afrodite', 'Apolo','Ares' ,'Ártemis', 'Atena', 'Deméter', 'Dionísio', 'Eros','Hades',
'Hélios', 'Hermes' ,'Hera','Héstia','Horas ', 'Mnemósine ', 'Perséfone' , 'Poseidon ', 'Selene ', 'Têmis', 'Zeus']
 
let tentativa = 5
let palpite = ""

while(tentativa <=5){
    
    while(palpite =! deuses){
        palpite = prompt("Advinhe o deus grego: ")
        console.log(`Você tem ${tentativa} tentativas: `)
    tentativa--
    }
}