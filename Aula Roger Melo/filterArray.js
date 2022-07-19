const users = [
    { name: 'Ada Lovelace', premium: true },
    { name: 'Grace Hopper', premium: false },
    { name: 'Alan Turing', premium: true },
    { name: 'Linus Torvalds', premium: false },
    { name: 'Margaret Hamilton', premium: true }
  ]

const premiumUsers = users.filter(user => user.premium)
//somente os usuarios com premium TRUE serão adicionados no novo array

console.log(premiumUsers);
// Resposta:
// [
//     { name: 'Ada Lovelace', premium: true },
//     { name: 'Alan Turing', premium: true },
//     { name: 'Margaret Hamilton', premium: true }
// ]

/*
    const randomNumbers = [36, 99, 37, 63]

    const numbersGreaterThan37 = randomNumbers.filter(item => item > 37 )

    console.log(numbersGreaterThan37);

    resposta: [ 99, 63 ]

    ----------------------------------------------------

    Quando você deeve usar o filter:

    Quando você precisa obter um novo array, com uma quantidade de itens MENOR
    que a do ARRAY ORIGINAL.

    array [1, 2, 3] exemplo [1, 2]

    função do filter funciona de forma diferente, porque nessa função precisa especificar qual item você
    quer adicionar no novo array que o filter iŕa gerar

*/