function gerarTabuada(){

    var numTabuada = document.getElementById('txtnumber')
    var resultTabuada = document.getElementById('selectTab')


    if (numTabuada.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        let i = 1
        let f = 10
        let numeroDaTabuada = Number(numTabuada.value)
       
        resultTabuada.innerHTML = ''
        for(let c = i; c <= f; c++){
            var optionSelect = document.createElement('option')
            optionSelect.text =`${numeroDaTabuada} X ${c}  = ${numeroDaTabuada * c}`
            resultTabuada.appendChild(optionSelect)
        }
    }

}