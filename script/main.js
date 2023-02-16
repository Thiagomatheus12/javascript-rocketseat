// function scope
let subject = 'create video'

function createThink() {
  subject = 'study'
  return subject
}

console.log(createThink(subject))
console.log(subject)

//function hoisting

// sayMyName()

// function sayMyName() {
//   console.log('Thiago')
// }

//arrow function

// const sayMyName = (name) => {
//   console.log(name)
// }

// sayMyName('Thiago')

//callback function

function sayMyName(name) {
  console.log('antes de executar a função callback')
  name()
  console.log('depois de executar a função callback')
}

sayMyName(() => {
  console.log('estou em uma callback')
})

/**
 * Function() constructor
 * 
 * expressão new
 * criar novo objeto
 * this keyword
 */

function Person(name) {
  this.name = name
  this.walk = function() {
    return this.name + " está andando"
  }
}

const thiago = new Person('Thiago')
console.log(thiago.walk())


