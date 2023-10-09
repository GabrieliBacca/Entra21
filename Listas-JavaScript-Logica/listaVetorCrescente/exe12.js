// Crie um vetor com nomes de frutas (por exemplo, maçã, banana, morango).

let frutas = ["maca", "banana", "morango"]

// Adicione "uva" e "abacaxi" ao final do vetor.

frutas.push("uva","abacaxi")

console.log(frutas)

//Remova "banana" do vetor.

let indice = frutas.indexOf("banana");
console.log(indice)
frutas.splice(indice,1)//numero de itens que quero remover depois do "indice"
console.log(frutas)

//Verifique se "morango" está no vetor.
if (frutas.includes("morango")) {
    console.log("O vetor contém 'morango'.");
  } else {
    console.log("O vetor não contém 'morango'.");
  }

  