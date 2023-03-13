/**
 * Manipulando Strings e Números
 * 
 * Transformar String em Número e Número em String
 */

let string = '123'
console.log(Number(string))

let number = 321
console.log(String(number))

/**
 * Contar quantos caracteres tem uma palavra e quantos dígitos tem um número.
 */

let word = 'Paralelepipedo'
console.log(word.length)

let number1 = 12345
console.log(String(number1).length)

// Transformar um número quebrado com 2 casa decimais e trocar ponto por vírgula

let number2 = 143.1221421
console.log(number2.toFixed(2).replace(".", ","))

// Transformando letras minúsculas em letras maiúsculas. Faça o contrário disso também 

let letras = 'abcs'
console.log(letras.toUpperCase())
console.log(letras.toLowerCase())

// separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços , coloque _ 

let phrase = 'Eu adoro programar'
let myArray = phrase.split(" ")//split serve para remover 
let phraseWithUnderscore = myArray.join("_") //Passa no argumento o que eu quero juntar
console.log(myArray)
console.log(phraseWithUnderscore)

// Verificar se o texto contém a palavra Amor

let verificar = 'Eu quero viver o amor!'
console.log(verificar.includes('amor')) // o includes é case sensitivity

// Criar Array com construtor

let myArray1 = new Array('a', 'b', 'c', 'd', 'e', 'f')
console.log(myArray1)

// Contar elementos dentro do array

console.log(['a', 'b', 'c'].length)

// Transformar uma cadeia de caracteres em elementos de um array

let words = "manipulação"
console.log(Array.from(words))

// Manipulando Arrays

let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")
// adicionar no começo
techs.unshift("sql")
// remover do fim
// techs.pop()
// remover do começo
// techs.shift()
// pegar somente alguns elementos do array
// console.log(techs.slice(1, 3))
// remover um item ou mais em qualque posição do array
// techs.splice(1, 2)
// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
techs.splice(index, 1)

console.log(techs)