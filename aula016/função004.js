function fatorial (x) {
    let fat = 1
    for(let c = x; c > 1; c--){
        fat *= c
    }
    return fat
}
let res = fatorial(1)
console.log(res)