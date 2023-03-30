/**
 * Buscando e contando dados e Arrays 
 * 
 * Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
 * 
 * contar o numero de categorias e o número de livros em cada categoria
 * contar o número de autores
 * mostrar livros do autor Augusto Cury
 * transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor
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
        title: "O homem mais rico da babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Letcher",
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
        title: "Ansiedade - como enfrentar o mal século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamentes eficazes",
        author: "Stephen R. Covey",
      },
    ],
  }
];

const totalCategories = booksByCategory.length

console.log(totalCategories)
for(let category of booksByCategory) {
  console.log('Total de livros da categoria: ', category.category)
  console.log(category.books.length)
}

function countAuthorS() {
  let authors = [];

  for(let category of booksByCategory) {
    for(let book of category.books){
      if(authors.indexOf(book.author) == -1) {
        authors.push(book.author)
      }
    }
  }

  console.log("Total de autores: ", authors.length)
}

countAuthorS()

function booksOfAuthor(author) {
  let books = [];

  for(let category of booksByCategory) {
    for(let book of category.books){
      if(book.author === author) {
        books.push(book.title)
      }
    }
  }

  console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor('George S. Clason')