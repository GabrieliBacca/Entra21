let a = 80000
let b = 200000
let ano = 0

while(a <= b){
    a += (a * 0.03)
    b += (b * 0.015)
    ano+=1
}

console.log(`A ultrapassa ou iguala B em ${ano} ano(s)`)
