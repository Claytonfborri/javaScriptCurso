
/*
const phaseScores = [
    { name: 'Vinicius Costa', score: 337 },
    { name: 'Roger Melo', score: 43 },
    { name: 'Alfredo Braga', score: 234 },
    { name: 'Pedro H. Silva', score: 261 },
    { name: 'Ana Paula Rocha', score: 491 },
    { name: 'Vinicius Costa', score: 167 },
    { name: 'Roger Melo', score: 137 },
    { name: 'Alfredo Braga', score: 135 },
    { name: 'Ana Paula Rocha', score: 359 },
    { name: 'Pedro H. Silva', score: 133 }
  ]

const rogerScore = phaseScores.reduce((accumulator, phaseScores) => {
    if(phaseScores.name === 'Roger Melo'){
        return accumulator + phaseScores.score
    }

    return accumulator
}, 0)

console.log(rogerScore);

//Resposta:180 -> este valor é o resultado da soma dos score de Roger Melo


--------------------------------------------------


const numbers = [1, 2, 3]

const sumResult = numbers.reduce((accumulator, item) => accumulator + item, 0)

console.log(sumResult);

resposta: 6
O zero usado para inicializar o accumulator só será usado na primeira ação. Depois descartado
Bom usar o valor inicial para especificar o valor que o accumulator irá receber. Exemplo: um numero
Primeiro paramêtro resulta no resultado do retorno da função
Neste caso, irá utilizar o número 0 como valor inicial do Primeiro parametro accumulate.
Então no primeiro passo ficara: 0 do acumulador e 1 do primeiro item que tem no Array.
const sumResult = numbers.reduce((accumulator, item) => 0 + 1, 0)
Resultado será armazenado no accumulator que ficara com o numero 1 resultado do retorno da função 

Na segunda vez o accumlador ficará com numero resultante que é 1 o item ficara com o segundo item do array numero 2.
Após realizar a função o accumlador ficara com o resultado dela que é 3 e o item com o proximo item do arry numero 3.
fara a função novamente e o accumladorficcara com o resultado da função que será 6
Esse numero 6 sera o resultado do reduce aplicando uma função de soma nos itens do array numbers.


 
Quando deve usar o reduce:

Quando baseado no array original, você precisa "reduzir" o array à um valor.

Reduzindo o array original a um numero que é o resultado da somas dos itens do array original.
[1, 2, 3], 6
 
*/