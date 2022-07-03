function verificar() {
    var dataDigitada = document.getElementById('txtano')
    var sexoEscolhido = document.getElementsByName('radsex')
    var resposta = document.querySelector('div#res')
    var data = new Date()
    var dataAnoAtual = data.getFullYear()

    

    if (dataDigitada.value.length == 0 || dataDigitada.value > dataAnoAtual){
        window.alert('[ERRO] Verifique o ano digitado')
    }else{
        var genero = ''
        var idade = dataAnoAtual - Number(dataDigitada.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sexoEscolhido[0].checked){
            genero = 'Masculino'
            if (idade > 0 && idade <= 10){
                img.setAttribute('src', 'bebeMenino.jpg')
            }else if (idade <= 21){
                img.setAttribute('src', 'adolescenteMenino.jpg')
            }else if (idade <= 50){
                img.setAttribute('src', 'adultoHomem.jpg')
            }else {
                img.setAttribute('src', 'idosoHomem.jpg')
            }
        }else if (sexoEscolhido[1].checked){
            genero = 'Feminino'
            if (idade > 0 && idade <= 10){
                img.setAttribute('src', 'bebeMenina.jpg')
            }else if (idade <= 21){
                img.setAttribute('src', 'adolescenteMenina.jpg')
            }else if (idade <= 50){
                img.setAttribute('src', 'adultaMulher.jpg')
            }else {
                img.setAttribute('src', 'idosaMulher.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos</p>`
        res.appendChild(img)
    } 


}