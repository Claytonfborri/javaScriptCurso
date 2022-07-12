/* 
    Fluxo de caixa familiar
    Descrição
    Esse desafio envolve a criação de dois arrays e um função que calculará o resultado desses valores, 
    dizendo se é positivo ou negativo, e após isso, o valor do saldo.

    Desafio:

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        * receitas: [] 
        * despesas: []
    Agora, crie uma função que irá calcular o total de receitas e 
    despesas e irá mostrar uma mensagem se a família está com 
    saldo positivo ou negativo, seguido do valor do saldo.
*/
let controleFinanceiro = {
    receitas: [150, 100, 500, 188],
    despesas: [160, 1100, 199, 188]
}

function somar(valores){
    let resultadoSoma = 0;
    for(let valoresSomados of valores){
        resultadoSoma += valoresSomados 
    }
    return resultadoSoma
}

function calcularSaldo(){
    let saldo = somar(controleFinanceiro.receitas) - somar(controleFinanceiro.despesas)
    
    const verificaSaldo = saldo >= 0

    let balanceText = 'Saldo Negativo'
    
    if (verificaSaldo){
        balanceText = 'Saldo Positivo'
    }

    return `${balanceText} no valor de R$${saldo.toFixed(2)}`
}

console.log(calcularSaldo())