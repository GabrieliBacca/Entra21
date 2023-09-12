let fibo = []
fibo[0] = 0
fibo[1] = 1

for (let i = 2; i < 14; i++) {//incia em dois pois é o terceiro elemento, 1+1
    fibo[i] = fibo[i - 1] + fibo[i - 2]//fibo é igual o termo anterior, e -2 o termo anterior do anterior
}

console.log(fibo.join(" "))