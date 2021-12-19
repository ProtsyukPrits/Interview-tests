//  iife - Immediate Invoked Function Expression

// Не можемо міняти наше значення в результаті

let result = []
// for (i = 0; i < 5; i++) {
//   result.push(function () {
//     console.log(i)
// })
// }

// result[2]()
// result[4]()


// Можемо міняти нашее значення в результаті, через те що у нас є анонімна ф-ція 

for (i = 0; i < 5; i++) {
  (function () {
    var j = i 
    result.push(function () {
      console.log(j)
    })
  })()
}

result[2]()
result[4]()