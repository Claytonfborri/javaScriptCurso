/*
    Crie uma função que receba uma string em celsius ou fahrenheit
    e faça a transformação de uma unidade para outra 
        C = (F - 32) * 5/9 
        F = C * 9/5 + 32
*/

let temperatura = '80C'

function analisaEscalaTemperatura(array){
    for(let analisaTemperatura of array){
        if (analisaTemperatura === 'F'){
            let temperaturaCelsius = array.replace('F','')
            let resultadoCelsius = (temperaturaCelsius - 32) * 5 / 9
            return `A temperatura de ${array} para Celsius é de ${resultadoCelsius.toFixed(2)}C`
        }else if (analisaTemperatura === 'C') {
            let temperaturaFahrenheit = array.replace('C','')
            let resultadoFahrenheit = temperaturaFahrenheit * 9 / 5 + 32 
            return `A temperatura de ${array} para Fahrenheit é de ${resultadoFahrenheit.toFixed(2)}F`
        }
    }
}

console.log(analisaEscalaTemperatura(temperatura))
