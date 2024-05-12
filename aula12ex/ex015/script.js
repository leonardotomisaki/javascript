function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano ) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var imagem = document.createElement('img')
    imagem.setAttribute('id','foto')
    if (fsex[0].checked) {
        genero = 'Homem'
        if(idade >= 0 && idade < 12) {
            //Criança
            imagem.setAttribute('src','imagens/criança-m.png')
        } else if (idade >= 12 && idade < 22) {
            //Jovem
            imagem.setAttribute('src','imagens/jovem-m.png')
        } else if (idade > 22 && idade < 60){
            //Adulto
            imagem.setAttribute('src','imagens/adulto-m.png')
        } else {
            //Idoso
            imagem.setAttribute('src','imagens/idoso-m.png')
        }
    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if(idade >= 0 && idade < 12) {
            //Criança
            imagem.setAttribute('src','imagens/criança-f.png')
        } else if (idade >= 12 && idade < 22) {
            //Jovem
            imagem.setAttribute('src','imagens/jovem-f.png')
        } else if (idade > 22 && idade < 60){
            //Adulto
            imagem.setAttribute('src','imagens/adulto-f.png')
        } else {
            //Idoso
            imagem.setAttribute('src','imagens/idoso-f.png')
        }
    }
        res.style.textAlign = 'Center'
        res.innerHTML = (`Detectamos ${genero} com ${idade} anos!`)
        res.appendChild(imagem)
    }
}
