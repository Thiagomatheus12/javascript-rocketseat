/**
 * new
 * left-hand-side expression
 * criar um novo objeto
 */

let date = new Date('2023-12-01')
console.log(date)

/**
 * operadores unários
 * typeof
 * delete
*/

const person = {
  name: 'John',
  age: 34,
}
 delete person.name

 console.log(person)


  // operadores aritiméticos
   
  // multiplicação
  console.log(3.6 * 5)
  // divisão 
  console.log(12 / 2)
  // soma
  console.log(34 + 67)
  // subtração
   console.log(60 - 4)


  // resto da divisão
  let remainder 
  remainder = 11 % 3
  console.log(remainder)
  // incremento
  let increment = 0
  increment++
  increment++
  console.log(increment) 
  // decremento
  let decrement = 10
  decrement--
  console.log(decrement)
  // exponencial
  console.log(3 ** 3) //3 elevado a 3
  
  //grouping operator ()
  let total = (2 + 3) * 5
  console.log(total)

  // operadores de comparação 

  //irá comparar valores e retornar um Boolean como resposta á comparação

  let one = 1
  let two = 2

  // == igual a 
  // console.log(two == 1)
  // console.log(two == "1")

  //! = diferente de 
  // console.log(one != two)
  // console.log(one != 1)
  // console.log(one != "1")


  // === estritamente igual a 
  // console.log(one === "1")
  // console.log(one === 1)

  // !== estritamente diferente de 
  // console.log(two !== "2")
  // console.log(two !== 2)

  // > maior que
  // console.log(one > two)

  // >= maior ou igual a 
  // console.log(one >= 1)
  // console.log(two >= 1)

  // < menor que 
  // console.log(one < two)

  // <= menor ou igual a 
  // console.log(one <= two)
  // console.log(one <= 1)
  // console.log(one <= 0)




  // Operadores de atribuição (Assignment)
  let x 
  
  //assignment
  x = 1
  
  //adition assignment
  x += 2
  
  //subtraction assignment
  x -= 1
  
  //multiplication assignment
  x *= 2
  
  //division assignment
  x /= 2
  
  //remainder, exponentiation
  x %= 2
  //x **= 2
  console.log(x)

  //operadores lógicos (logical operators)

  // -2 valores booleanos, quando verificados
  //resultará verdadeiro ou falso

  // let pao = true
  // let queijo = false

  //AND &&
  // console.log(pao && queijo) os dois tem que ser true
  
  //OR ||
  // console.log(pao || queijo)
  
  //NOT !
  // console.log(!pao)

  //Operador condicional (Ternário)

  //dependendo da condição, nós receberemos valores diferentes

  //condição então valor 1 se não valor 2
  //condition ? value1 : value2

  //exemplos 

  //café da manhã top
  // let pao = true
  // let queijo = false

  // const niceBreakfast = pao && queijo ? 'café top' : 'café ruim'
  // console.log(niceBreakfast)

  //maior de 18 

  let age = 16
  const canDrive = age >= 18 ? 'can drive' : "can't drive"
  console.log(canDrive)

  // operador de string (String operator)

  //comparison (comparação)
  // console.log('a' == 'a')

  //concatenation (concatenação)
  //retorna a união de duas Strings
  console.log('a' + 'a')

  //type conversion (typecasting) vs type coersion

  console.log(Number('9') + 5)

  /** FALSY
   * quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)
   * 
   * false 
   * 0
   * -0
   * ""
   * null
   * undefined
   * NaN
   */

  console.log(true ? 'verdadeiro' : 'falso')

  /**
   * TRUTHY
   * quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)
   * 
   * true
   * {}
   * []
   * 1
   * 3.23
   * "0"
   * "false"
   * -1
   * Infinity
   * -Infinity
   */

  console.log({} ? 'verdadeiro' : 'falso')

  /**
   * operator precedence
   * precedência de operadores
   * 
   * grouping  ()
   * negação e incremento ! ++ --
   * multiplicação e divisão  * /
   * adição e subtração  + - 
   * relacional < <= > >=
   * igualdade == !- === !==
   * AND &&
   * OR ||
   * conditional ?:
   * assignment (atribuição) = =+ -= *=
   * 
   */

  console.log( (2 + 5) * 10 )