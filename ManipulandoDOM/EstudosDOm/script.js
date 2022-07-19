/*
getElementById() -
document.getElementById('nome-do-id');  - Ele pega o filho(h1, e tags html) completo.
Element

getElementsByClassname()-
const element = document.getElementsByClassname('nome da classe');
HTMLCollection

getElementsByTagName()-
const element = document.getElementsByTagName('nome da tag ex: h1, head, boy');
HTMLCollection

querySelector()-
const element = document.querySelector('primeiro seletor que ele achar');
Element

querySelectorAll()-
const element = document.querySelectorAll(Coleções de nós);
NodeList
Podendo fazer um forEach para esses nós.

textContent
const element = document.querySelector('h1')
element.textContent = Atribuir um valor para para o h1.
Da para concatenar valores também, através de +=


Innertext
const element = document.querySelector('h1')
element.innerText = "Olá Devs" - Troca o texto interno da tag h1

InnerHTML
const element = document.querySelector('h1')
element.innerHTML = "Olá Devs ! <small>!!!</small>"
Trocar conteudo html interno do elemento


===============================

Manipular o valor de um input
const element = document.querySelector('input')
element.value = "Valor que eu quiser" - Adicionar valor
Ou altera se já tiver um valor pré estabelecido.


=============================


Manipular atributos dos elementos
const header = document.querySelector('header')
header.setAttribute('id', 'header')
const headerID = document.querySelector('#header')
Console.log(headerID.getAttribute('id')

===========================

//Alterando os estilos
const element = document.querySelector('body')

element.style.backgroundColor = "#f9f3D2"
console.log(element.style.backgroundColor)



//Alterando os estilos
//classList
const element = document.querySelector('body')

element.classList.add('active', 'green')
console.log(element.classList)
element.classList.remove('active')
element.classList.toggle('active') // Se tiver a classe ele tira e se não tiver ele coloca.

=============================

//Navegando pelos elementos
//parentNode parentElement

const body = document.querySelector('body')

console.log(body.parentElement)

===============================

//Navegando pelos elementos
//childNodes children

const el = document.querySelector('body')

console.log(el.childNodes)
console.log(el.children)

//firstChild firstElementChild
console.log(el.firstChild) // Leva em consideração espaço vazio
console.log(el.firstElementChild) // Esse não leva

// lastChild lastElementChild
console.log(el.lastChild)
console.log(el.lastElementChild)

=======================

//Navegando pelos elementos irmãos

const el = document.querySelector('body script')

// nextSibling nextElementSibling
console.log(el.nextSibling)
console.log(el.nextElementSibling)

//previousSibling previousElementSibling
console.log(el.previousSibling)
console.log(el.previousElementSibling)

=====================================

// Criando e adicionando elementos

//createElement
const div = document.createElement('div')
div.innerText = "Olá Devs!"

//append prepend

const body = document.querySelector('body')
body.append(div)//adiciona depois do ultimo filho
body.prepend(div)// adiciona antes de todos os filhos

//Adicionando elementos
//createElement
const div = document.createElement('div')
div.innerText = "Olá Devs!"

//inserBefore será adicionado entra o header e o script
const body = document.querySelector('body')
const script = body.querySelector('script')
body.insertBefore(div, script)


//Eventos

function print(){
    console.log('print')
}

const input = document.querySelector('input')
//Eventos de teclado
//Toda vez que apertar a tecla irá rodar e aparecer no console
input.onkeydown = function() {
    console.log('rodei')
}


//Eventos

const h1 = document.querySelector('h1');

//ouvir o evento. 2 argumentos, tipo e a função que ira executar
h1.addEventListener('click', print)

function print(){
    console.log('print')
}


//Eventos
const input = document.querySelector('input')
//pegando a tecla digitada
input.onkeydown = function(event) {
    console.log(event.keyCode)
    if(event.key === 'Escape'){
        console.log('SAIUUU!')
    }
}

// //Pegando o valor que é digitado no input
// input.onkeydown = function(event) {
//     console.log(event.currentTarget.value)
// }


*/