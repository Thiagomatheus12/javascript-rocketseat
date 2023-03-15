// estrutura de repetição
//for
//break - para a execução do loop
//continue - pula a execução do momento

// for(let i = 10; i > 0; i-- ) {
//   if(i === 5) {
//     continue;
//   }
//   console.log(i)
// }

//while 

let i = 0;
while(i < 10) {
  console.log(i)

  i++
}

//for...of

let name = 'Thiago'
let names = ['João', 'Paulo', 'Pedro']

for(let name of names) {
  console.log(name)
  
}

//for...in

let person = {
  name: 'Jhon',
  age: 30,
  weight: 88.7
}

for(let property in person) {
  console.log(property)
}