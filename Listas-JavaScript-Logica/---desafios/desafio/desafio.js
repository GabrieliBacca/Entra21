
prompt = require('prompt-sync')()
const deusesMitologiaGrega = [
  "ZEUS", "APOLO", "AFRODITE", "ATHENA", "HADES", "POSEIDON", "DIONYSUS", "HERCULES",
  "ARTEMIS", "ARES", "HERMES", "DEMETER", "HERA", "PERSEUS", "MEDUSA", "CERBERUS",
  "CHIMERA", "MINOTAUR", "GRIFFON"
];

let tentativas = 0;

function adivinharDeus() {
  const tentativa = prompt("Adivinhe um Deus da mitologia grega: ").toUpperCase('')

  if (deusesMitologiaGrega.includes(tentativa)) {
    console.log(`Parabens! O deus ${tentativa} esta na lista`)
  } else {
    console.log(`O deus ${tentativa} nao esta na lista`)
  }

  tentativas++

  if (tentativas < 5) {
    const continuar = prompt("Você gostaria de adivinhar mais um?")

    if (continuar == "sim") {
      adivinharDeus();
    } else {
      console.log("Obrigado por jogar!");
    }
  } else {
    console.log("Você atingiu o limite de tentativas.");

  }
}
  adivinharDeus();
