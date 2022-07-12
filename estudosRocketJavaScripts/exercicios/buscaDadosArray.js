/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

var qntCategorias = booksByCategory.length
console.log('Quantidade de categorias: '+ qntCategorias)

for (category of booksByCategory){
    console.log(`A quantidade de livros da categoria ${category.category} é ${category.books.length}`)
}

function countAuthors(){
    let authors = [];
    for (category of booksByCategory){
        for (book of category.books){
            if(authors.indexOf(book.author) == -1) { // Se dentro deste livre tem algum elemento se tem o nome do autor
                authors.push(book.author)
            }
        }
    }
    console.log(`Quantidade de autores: ${authors.length}`)
}

countAuthors()

function authorChose(author){
    let livrosTitle = [];
    for (category of booksByCategory){
        for (book of category.books){
            if(book.author === author) { // Se dentro deste livre tem algum elemento se tem o nome do autor
                livrosTitle.push(book.title)
            }
        }
    }
    console.log(`Os livros do autor ${author}: ${livrosTitle.join(", ")}`)
}

authorChose('Stephen R. Covey')