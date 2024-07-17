function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passos = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
        // window.alert('[ERRO] Faltam Dados!')
        res.innerHTML = `Não é possivel contar`
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passos.value)
        if (p <= 0) {
            window.alert('Passo Inválido, Considerando PASSO 1')
            p = 1
        }
        /* Contagem Crescente*/
        if (i < f) {
           for(let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c}	\u{1F449}`
        }
        res.innerHTML += `\u{1f3c1}` 
        /* Contagem Decrescente*/
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}` 
    } 
}