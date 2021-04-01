// babel src/playground/es6-arrow-functions.js --out-file=public/scripts/app.js --presets=env,react --watch

// es5 function
const square = function (x) {
  return x * x
}
// same as named functions
// function square(x) {
//   return x * x
// }
console.log(square(8))
// 64

// es6 arrow function - are always anonymous - there's no way to name it
// you have to assign it to a variable
const squareArrow1 = (x) => {
  return x * x
}
console.log(squareArrow1(8))
// 64

// the big plus about arrow functions is that they allow you to be more concise
const squareArrow2 = (x) => x * x
console.log(squareArrow2(9))
// 81

// challenge
const fullName = 'Ryan Johnson'
const getFirstName = (fullName) => fullName.split(' ')[0]

console.log(getFirstName(fullName))
