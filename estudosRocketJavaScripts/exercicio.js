// //1. Declare uma variavel com nome weight:
var weight;

// //2. Que tipo de dado é a variavel acima?
console.log(typeof weight)

// //3. Declare uma variável e atribua valores para cada um dis dados:
let name = 'Clayton'
let age =  25
let stars = 4.6
let isSubscribed = true

// //4. A variável student abaixo é de que tipo de dados?
let student1 = {}
console.log(typeof student) // object

//4.1 Atribua a ela as mesmas propriedades e valores do ex 3.
let student = {
    name: 'Clayton',
    age: 25,
    stars: 4.6,
    isSubscribed: true,
    weight: 76
}

/* 4.2 - Mostre no console a seguinte mensagem:
    <name> de idade <age> pesa <weight> kg
    Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
*/
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)


// 5.
let students =[]

// 6.
students.push(student)
console.log(students)

// 7.
console.log(students[0])

// 8.
let john = {
    name: 'John',
    age: 35,
    stars: 4.6,
    isSubscribed: true,
    weight: 80
} 

students[1] = john
console.log(students)