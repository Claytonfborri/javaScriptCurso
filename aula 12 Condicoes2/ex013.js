var horaAgora = new Date()
var hora = horaAgora.getHours()

console.log(`Hora agora: ${hora}`)
if ( hora < 12){
    console.log('Bom dia!')
}else if (hora < 18) {
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}