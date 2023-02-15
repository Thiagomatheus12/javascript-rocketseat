//Var é global e, também local
//Hoisting = elevação
var clima = 'Quente'
clima = 'Frio'
console.log(clima)

//Let
let tempo = 'Chuvoso'
tempo = 'Nublado'
console.log(tempo)
 
//Const

const estado = 'SP'

//Não é possível atribuir outro valor a const


{
  let x = 0 
  console.log(x)
}


//Praticando 


//Variaveis e tipos de dados
//Declaração or declaration
var name

//Assignment or atribuição de valores
name = "Thiago"

//Que tipo de dado foi colocado na variável
console.log(typeof name)

let age, isHuman 
age = 26
isHuman = true

//Multiplos argumentos na função
console.log(name, age, isHuman)

//Escrita de texto + variáveis

//Concatenando valores
console.log('O ' + name + ' tem ' + age + 'anos de idade')

//Interpolando valores com template literals or template strings
console.log(`O ${name} tem ${age} anos de idade`)


//Object

const person = {
  name: 'John',
  age: 26,
  weight: 88.6,
  isAdmin: true
}

console.log(`O ${person.name} tem ${person.age} anos de idade`)

//Array

const animals = [
  'Lion',
  'Monkey',
  {
    name: 'Cat',
    age: 3
  }
]

//Acessando valores dentro do array
console.log(animals[2].name)
console.log(animals.length)