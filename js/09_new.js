function Cat(name, age) {
  this.name = name
  this.age = age
}

// const cat = new Cat('black', 'Potter')
// console.log(cat)

// function myNew(constructor, ...args) {
//   const obj = {}
//   Object.setPrototypeOf(obj, constructor.prototype)
//   return constructor.apply(obj, args) || obj
// }

// const cat = myNew(Cat, 'black', 'Potter')
// console.log(cat)

//  Якщо записати ф-цію без new буде undefined
// //not good
// const cat = Cat()
// console.log(cat) 
// // good
// const cat = new Cat()
// console.log(cat)