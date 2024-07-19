let num = [7, 3, 2, 4]

num.sort()
num.push(8)
console.log(num)
console.log(`Essa variável tem ${num.length} posições!`)
console.log(`O primeiro valor é ${num[0]}`)

let pos = num.indexOf(5)
if (pos == -1) {
    console.log('Este valor não existe')
} else {
    console.log(`O valor 5 está na posição ${pos}`)
}



