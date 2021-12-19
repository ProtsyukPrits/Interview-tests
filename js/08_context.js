// const person = {
//   surname: 'Stark',
//   knows: function (what, name) {
//     console.log(`You ${what} know ${name} ${this.surname}`)

//   }
// }
// const john = {surname: 'Snow'}

// person.knows('all', 'Bran')

// // Методи виклику

// person.knows.call(john, 'not', 'John')
// person.knows.apply(john, ['not', 'John'])
// person.knows.call(john, ...['not', 'John'])
// person.knows.bind(john, 'not', 'John')
// const bound = person.knows.bind(john, 'not', 'John')
// bound()


// ++++++++++++++++


// function Person(name, age) {
//   this.name = name
//   this.age = age
//   console.log(this)
// }

// const elena = new Person('Elena', 26)


// ++++++++++++++++


//  Явна передача еконтексту

// function logThis() {
//   console.log(this)
// }

// const obj = { num: 32 }
// logThis.call(obj)
// logThis.apply(obj)
// logThis.bind(obj)()


// +++++++++++


// Implised не явна передача контексту
// Не явна привязка

// const animal = {
//   legs: 4,
//   logThis: function () {
//     console.log(this)
//   }
// }
// animal.logThis()



// +++++++++++++

// стрілочні ф-ції

function Cat(color) {
  this.color = color
  console.log('This', this)
    // Єдине після чого треба ставити ; це this
    ; (() => console.log('Arrow this', this))()
}

new Cat('red')