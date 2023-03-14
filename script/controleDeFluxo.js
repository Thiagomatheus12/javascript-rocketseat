 // control flow

 //if...else

 let temperature = 36.9
 let highTemperature = temperature >= 37.5
 let mediumTemperature = temperature < 37.5 && temperature >= 37

 if(highTemperature) {
  console.log('Febre alta')
 } else if(mediumTemperature) {
  console.log('Febre moderada')
 } else {
  console.log('Saudável')
 }


 // Switch

 function calculate(number1, operator, number2) {
  let result

  switch (operator) {
    case '+':
      result = number1 + number2
      break;
    case '-':
      result = number1 - number2
      break;
    case '*':
      result = number1 * number2
      break;
    case '/':
      result = number1 / number2
      break;
  
    default:
      console.log('Não implementado')
      break;
  }
  return result
 }


 // throw 

 function sayMyName(name = '') {
  if (name === '') {
    throw 'Nome é obrigatório'
  }
  console.log('depois do erro')
 }

 //try...catch
 try {
  sayMyName()
 } catch(e) {
  console.log(e)
 }

 console.log('Após a função de erro')