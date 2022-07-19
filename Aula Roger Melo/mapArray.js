
const products = [
    { name: 'Mouse Sem Fio', price: 30 },
    { name: 'Pen Drive', price: 25 },
    { name: 'Cartucho de Tinta', price: 50 },
    { name: 'Suporte Ergonômico para Notebook', price: 23 },
    { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
  ]

const saleProducts = products.map(product => {
    if (product.price >= 30){
        //Como precisa que o map gere um array de objeto então o return precisa retornar um Objeto.
        //No return está sendo aplicado o conceito de IMUTABILIDADE, criando um novo objeto em um novo ARRAY,
        //Com isso o array original 'products' fica da mesma forma/intacto que foi criado com os mesmos valores.
        return {
            name: product.name,
            price: product.price / 2
        }
    }
    //QUANDO O VALOR NÃO ATENDER A CONDIÇÃO DO IF PRECISA RETORNAR SOMENTE O OBJETO RECEBIDO POR PARAMÊTRO
    //PARA NÃO RETONAR O undefined.
    return product
})

console.log(saleProducts);





/*

------------------------------------------------------------------------------------
const products = [
    { name: 'Mouse Sem Fio', price: 30 },
    { name: 'Pen Drive', price: 25 },
    { name: 'Cartucho de Tinta', price: 50 },
    { name: 'Suporte Ergonômico para Notebook', price: 23 },
    { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
  ]

const saleProducts = products.map(product => {
    if (product.price >= 30){
        //Como precisa que o map gere um array de objeto então o return precisa retornar um Objeto.
        return {
            name: product.name,
            price: product.price / 2
        }
    }
})

console.log(saleProducts);

RESP0STA:
Como o 2 e o 4 objeto não passou pelo IF e não retornou algo estes 2 objetos ficam como undefined, porque
todo objeto que não passa por um return no map recebe undefined.
[
    { name: 'Mouse Sem Fio', price: 15 },
    undefined,
    { name: 'Cartucho de Tinta', price: 25 },
    undefined,
    { name: 'Repetidor de Sinal Wi-Fi', price: 22 }
  ]


-------------------------------------------------------
//Gerar novo array com a metade dos valores de prices.
const prices = [20, 10, 30, 25, 15, 40, 80, 5]

const salesPrices = prices.map(price => price / 2)

console.log(salesPrices)
-------------------------------------------------------


const numbers = [1, 2, 3];

const doubledNumbers = numbers.map(item => {
    return item * 2 
})

console.log(doubledNumbers)

REGRA FUNDAMENTAL MAP FILTER REDUCE:
A FUNÇÃO SEMPRE DEVERÁ RETORNAR UM VALOR!!!!



Só primeiro paramêtro é obrigatório.

const numbers = [1, 2, 3];


numbers.map((item, index, array) => {
    console.log(item, index, array)
})

Resposta:
1 0 [ 1, 2, 3 ]
2 1 [ 1, 2, 3 ]
3 2 [ 1, 2, 3 ]



    item:   index:      array:
     1       0        [ 1, 2, 3 ]
     2       1        [ 1, 2, 3 ]
     3       2        [ 1, 2, 3 ]

*/