//  __proto__  ES6

// Object.getPrototypeOf()  ES5

// function Cat(name, color) {
//   this.name = name
//   this.color = color
// }

// Cat.prototype.voice = function () {
// console.log(`Cat, ${this.name} says myay`)  
// }

// const cat = new Cat('Kot', 'white')

// console.log(Cat.prototype)
// console.log(cat)
// console.log(cat.__proto__ === Cat.prototype)
// console.log(cat.constructor)
//cat.voice()



// +++++++++++++++++++++



function Person() { }

Person.prototype.legs = 2
Person.prototype.skin = 'white'

const person = new Person()
person.name = 'Dima'

// console.log('skin' in person)
// console.log(person.legs)
// console.log(person.name)
