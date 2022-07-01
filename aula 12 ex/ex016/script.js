function verificar(){
    var date = new Date()
    var anoAtual = date.getFullYear()
    var anoDigitado = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var sex = document.getElementsByName('radsex')
   

    if (anoDigitado.value.length == 0 || Number(anoDigitado.value) > anoAtual){
        window.alert('[ERRO] Verifique os dados digitados!')
    }else {
        var idade = anoAtual - Number(anoDigitado.value) 
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked){
            genero = 'Masculino'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebeMenino.jpg')
            }else if (idade < 21){
                img.setAttribute('src', 'adolescenteMenino.jpg')
            }else if (idade < 50){
                img.setAttribute('src', 'adultoHomem.jpg')
            }else{
                img.setAttribute('src', 'idosoHomem.jpg')
            }
        }else if (sex[1].checked){
            genero = 'Feminino'
            if (idade > 0 && idade < 10){
                img.setAttribute('src', 'bebeMenina.jpg')
            }else if (idade < 21){
                img.setAttribute('src', 'adolescenteMenina.jpg')
            }else if (idade < 50){
                img.setAttribute('src', 'adultoMulher.jpg')
            }else{
                img.setAttribute('src', 'idosoMulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos</p>`
        res.appendChild(img)
    }
}
    