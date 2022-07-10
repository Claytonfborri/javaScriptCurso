//Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array.
//Depois disso, transforme o array em um texto e onde eram espaçoes coloque _


let phrase = "Hoje é domingo dia de estudar programação!"
let myArray = phrase.split(" ") // Dividir o texto para cada osição de um array
console.log(myArray)
let phraseWithUnderScore = myArray.join("_") // Irá juntar o array em uma string
console.log(phraseWithUnderScore)