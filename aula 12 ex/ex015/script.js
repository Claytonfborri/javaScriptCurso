


function alterarPorTurno(){
    var horaDoDia = new Date()
    var hora = horaDoDia.getHours()
    var imagem = window.document.getElementById('imagem')
    var msg = window.document.getElementById('msg')

    msg.innerHTML = `Agora são <strong>${hora}</strong> horas!`

    if (hora > 0 && hora < 12 ){
        msg.innerHTML += '<p>BOM DIA!</p>'
        imagem.src = 'fotoManha.jpg'
        document.body.style.background = '#ffd970cb'

    }else if (hora >=12 && hora <= 18) {
        msg.innerHTML += '<p>BOA TARDE!</p>'
        imagem.src = 'fotoTarde.jpg'
        document.body.style.background = '#ff480085'

    }else{
        msg.innerHTML += '<p>BOA NOITE!</p>'
        imagem.src = 'fotoNoite.jpg'
        document.body.style.background = '#0b2c4bcb'
    }

}