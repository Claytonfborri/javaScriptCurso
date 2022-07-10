
let techs = ["html", "css", "js"]

//adicionar um item no fim do array
techs.push('sql')
//adicionar no começo do array
techs.unshift('java')
//remover do fim
techs.pop()
//remover do começo
techs.shift()
//pegar somente alguns elementos do array
console.log(techs.slice(1,3))
//remover 1 ou mais item em qualquer posição do array
techs.splice(1, 1)
//encontrar a posição de um elemento no array
let index = techs.indexOf('css')
techs.splice(index, 1)

console.log(techs)
