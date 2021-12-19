//  Коли ф-ція замикає значення із вище стоячого скопа

// function sayHelloTo(name) {
//   const massage = 'Hello' + name

//   return function () {
//     console.log(massage)
//   }
// }

// const helloToElena = sayHelloTo('Elena')
// const helloToIgor = sayHelloTo('Igor')
// console.log(helloToElena)

// helloToElena()
// helloToIgor()



// function createFrameworkManager() {
//   const fw = ['Angular', 'React']

//   return {
//     print: function () {
//       console.log(fw.join(' '))
//     },
//     add: function (framework) {
//       fw.push(framework)
//     }
//   }
// }

// const manager = createFrameworkManager()
// manager.print()
// manager.add('VueJS')

// manager.print()

// setTimeOut

const fib = [1, 2, 3, 5, 8, 13]

for (let i = 0; i < fib.length; i++) {
  (function(j) {
     setTimeout(function () {
    console.log(`fib[${i}] = ${fib[i]}`)
  }, 1500)
  })(i)
}