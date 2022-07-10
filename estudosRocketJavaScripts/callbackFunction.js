// callback function


function sayMyName(name){
    console.log('antes de executar a função callback')

    name()

    console.log('depois de executar a callback')
}


sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)

//mesma coisa que a função de cima
function sayMyName(){
    console.log('antes de executar a função callback')

    function name(){
        console.log('estou em uma callback')
    }
    name()
    console.log('depois de executar a callback')
}


sayMyName()
   