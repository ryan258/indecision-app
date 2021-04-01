// babel src/playground/es6-arrow-functions-2.js --out-file=public/scripts/app.js --presets=env,react --watch

// arguments object - no longer bound w/ arrow functions

/*const add = function (a, b) {
  console.log(arguments) // prints everything that was an argument, even things that weren't defined
  return a + b
}
console.log(add(1, 2))
// 3

// see arguments object - no longer bound w/ arrow functions
const addArrow = (a, b) => {
  // console.log(arguments)
  return a + b
}
console.log(addArrow(10, 20))
// error, arguments not defined

// this keyword - no longer bound

const user = {
  name: 'Manny',
  cities: ['Miami', 'St. Paul', 'Bentonville'],
  printPlacesLived: function () {
    // the this keyword is bound to this object
    console.log(this.name)
    console.log(this.cities)
  }
}

user.printPlacesLived()*/
// Manny
// ["Miami", "St. Paul", "Bentonville"]

// const user1 = {
//   name: 'Manny',
//   cities: ['Miami', 'St. Paul', 'Bentonville'],
//   printPlacesLived: function () {
//     // the this keyword is bound to this object
//     console.log(this.name)

//     //we could grab this from here and put it in a that
//     // const that = this
//     // loop through
//     this.cities.forEach(function (city) {
//       // but there is no bound this value...
//       // console.log(that.name + ' has lived in ' + city) // this undefined
//       console.log(this.name + ' has lived in ' + city) // this undefined
//     })
//   }
// }

// user1.printPlacesLived()
// Manny has lived in Miami
// Manny has lived in St. Paul
// Manny has lived in Bentonville
// or error

//! but with ES6 arrow functions they no longer bind their own this value, they just use the this value of the context they were created in
/*
const user2 = {
  name: 'Manny',
  cities: ['Miami', 'St. Paul', 'Bentonville'],
  printPlacesLived: function () {
    this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city) // this undefined
    })
  }
}

user2.printPlacesLived()
*/
// Manny has lived in Miami
// Manny has lived in St. Paul
// Manny has lived in Bentonville

//! you don't want to use an arrow function for the method itself
// const user3 = {
//   name: 'Manny',
//   cities: ['Miami', 'St. Paul', 'Bentonville'],
//   printPlacesLived: () => {
//     this.cities.forEach((city) => {
//       console.log(this.name + ' has lived in ' + city) // this undefined
//     })
//   }
// }

// user3.printPlacesLived()
// cities is undefined

// so we want to use that ES6 function for the method

//! THE METHOD WAY
//! but there is a method definition syntax that has all the characteristics of an es5 function
/*
const user4 = {
  name: 'Manny',
  cities: ['Miami', 'St. Paul', 'Bentonville'],
  printPlacesLived() {
    this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city) // this undefined
    })
  }
}

user4.printPlacesLived()
*/

//! And we'll do something with map
const user5 = {
  name: '👻',
  cities: ['Miami', 'St. Pizza', 'Bentonville'],
  printPlacesLived() {
    // map you can transform each item and get a new array back
    const cityMessages = this.cities.map((city) => {
      // with .map() we can actually transform the item
      return this.name + ' has lived in ' + city + '! '
    })
    return cityMessages
    // for each lets you do something w/ each item
    // this.cities.forEach((city) => {
    //   console.log(this.name + ' has lived in ' + city) // this undefined
    // })
  }
}

console.log(user5.printPlacesLived())

//! And we'll do something with map - step 2 - to clean it up
const user6 = {
  name: '👻 👻 👻',
  cities: ['Miami', 'St. Pizza', 'Bentonville'],
  printPlacesLived() {
    return this.cities.map((city) => {
      return this.name + ' have lived in ' + city + '! '
    })
  }
}

console.log(user6.printPlacesLived())

//! clean it up further!
const user7 = {
  name: '🔥 👻 👻 👻 🔥',
  cities: ['Miami', 'St. Pizza', 'Bentonville'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' have lived in ' + city + '! ')
  }
}

console.log(user7.printPlacesLived())

// Challenge area

const multiplier = {
  numbers: [1, 2, 3, 4],
  multiplyBy: 10,
  multiply() {
    return this.numbers.map((num) => num * this.multiplyBy)
  }
}

console.log(multiplier.multiply())
