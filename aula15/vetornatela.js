let valores = [9, 4, 2, 7, 5, 9, 6, 1]
valores.sort()

/*for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}
