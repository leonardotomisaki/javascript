function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var boa = document.getElementById('boa')
    //var hora = data.getHours()
    var hora = 10
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12){
        // BOM DIA!
        img.src = 'imagens/fotomanha.png'
        boa.innerHTML = ('Bom Dia!') 
        document.body.style.background = '#fead4b'
    } else if (hora >= 12 && hora < 18){
        // BOA TARDE!
        img.src = 'imagens/fototarde.png'
        boa.innerHTML = ('Boa Tarde!') 
        document.body.style.background = '#f2dec5'
    } else {
        // BOA NOITE!
        img.src = 'imagens/fotonoite.png'
        boa.innerHTML = ('Boa Noite!')
        document.body.style.background = '#24252a'
    }
        

        

}
