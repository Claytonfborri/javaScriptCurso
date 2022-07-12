//throw

function sayMyName (name = ''){
    if (name === '') {
        throw 'Nome é obrigatório' 
    }
    console.log('depois do erro')
}

//try ... catch

try{
    sayMyName('Clayton')

}catch(e){
    console.log(e)
}