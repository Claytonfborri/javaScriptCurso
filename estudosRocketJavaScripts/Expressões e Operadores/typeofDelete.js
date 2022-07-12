/*
    Operadores Unários
    typeof
    delete
*/

const person = {
    name: 'Clayton',
    age: 25,
}

delete person.age
console.log(person) // deletou a propriedade age do objeto
// console.log(typeof(person)) // Mostra o tipo