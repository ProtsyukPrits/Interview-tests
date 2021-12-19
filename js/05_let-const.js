// let is global
// const is local


const PORT = 8080
const array = ['JavaScript', 'is', 'Awesome']
array.push('!')
array[0] = '25'
console.log(array)

const obj = {}
obj.name = 'Dima'
obj.age = 26

console.log(obj)

delete obj.name

console.log(obj)