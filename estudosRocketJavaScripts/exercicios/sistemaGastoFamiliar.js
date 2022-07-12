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
const controleFinanceiro = {
    receitas: [150, 1000, 500, 188],
    despesas: [160, 1100, 199, 188]
}


function calcularSaldo(){
    var resultadoReceitas = 0
    var resultadoDespesas = 0
    var saldo = 0

    for (let receita of controleFinanceiro.receitas ){
       resultadoReceitas = resultadoReceitas + receita
    }
    
    for (let despesa of controleFinanceiro.despesas ){
        resultadoDespesas = resultadoDespesas + despesa
     }
    
     saldo = resultadoReceitas - resultadoDespesas
    
     if ( saldo > 0){
        return `Saldo Positivo com saldo de: R$${saldo}`
     }else{
        return `Saldo Negativo com saldo de: R$${saldo}`
     }
}

console.log(calcularSaldo())
