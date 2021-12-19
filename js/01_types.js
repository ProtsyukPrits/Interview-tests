// null, undefined, boolean, number, string, object, symbol

// console.log(typeof 0)
// console.log(typeof true)
// console.log(typeof 'JavaScript') // '', "", `` - iteral
// console.log(typeof undefined)
// console.log(typeof Math)
// console.log(typeof Symbol('Js'))
// console.log(typeof NaN)

// В чому різниця між undefined і null,
// undefined - використвується коли змінна не визначена,
// null - використовується коли змінна визначена але не оприділена і немає значення



// Приведення типів

// let language = 'JavaScript'
// if (language) {
//   console.log('The best language is: ', language)
// }



// Рядки і числа

// console.log(1 + '2') // string 12
// console.log('' + 1 + 0) // string 10
// console.log('' - 1 + 0)  // number -1
// console.log('3' * '8') // number 24
// console.log(4 + 10 + 'px') //number 14px
// console.log('px' + 4 + 10) // string px410
// console.log('42' - 40) //number 2
// console.log('42px' - 2) // NaN
// console.log(null + 2) //null
// console.log(undefined + 42) //NaN


//  == vs ===
console.log(2 == '2') //true
console.log(2 === '2') //false
console.log(undefined == null) //true
console.log(undefined === null) //false
// Краще використовувати === , менше помилок в коді


// +++++++++++++++
// Нюанси при порівнянні

console.log(false == '') 
console.log(false == []) 
console.log(false == {}) 
console.log('' == 0) 
console.log('' == []) 
console.log('' == {}) 
console.log(0 == []) 
console.log(0 == {}) 
console.log(0 == null)
 