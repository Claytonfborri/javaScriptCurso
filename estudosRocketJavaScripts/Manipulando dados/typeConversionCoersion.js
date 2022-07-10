/*
Type conversion (typecasting) vs Type coersion

*Alteração de um tipo de dado para outro tipo

*/

console.log('9'+ 5) //Type coersion fez com que o 5 se tornasse uma string para concatenar 

console.log(Number('9') + 5) // Type conversion fez explicitamente a conversão do 9 string para number

//Manipulando Strings em Números

//Transformar String em Número e numero em String

let string = '123'
console.log(Number(string))
let number = 321
console.log(String(number))

