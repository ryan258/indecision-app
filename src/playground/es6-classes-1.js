// babel src/playground/es6-classes-1.js --out-file=public/scripts/app.js --presets=env,react --watch

// the goal of classes is to reuse code - it's like a blue print that we can make instances from

class Person {
  // where we define our class
  // vv constructor function is the function that gets called when you create a new instance and handles all the arguments passed in to that new instance
  //    Anon is a default param value if no name is passed when obj is instanciated
  constructor(name = 'Anon', age = 0) {
    // regular function body
    // console.log('test')
    this.name = name // 'this' refers to the class instance
    this.age = age
  }

  // define another method
  getGreeting() {
    // return 'Hi!'
    // - in methods we have access through 'this'
    // return 'Hi, I am ' + this.name + '!'
    return `Hi, I'm ${this.name}!`
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

// we can just extend a child class instead of copy/pasting everything from Person (the parent class)
class Student extends Person {
  // now we want to override the constructor function
  // - good news is that we don't have to redesignate defaults for inherited props
  constructor(name, age, major) {
    // before we can do anything we have to call the parent constructor function by using super() which makes it the same as calling the parent class
    super(name, age)
    this.major = major
  }

  // now we can also add on additional methods
  hasMajor() {
    // !! flips it from true to false and back to get a boolean value
    return !!this.major
  }

  // we can also override methods that were inherited - we can completely change the behavior of this method
  getDescription() {
    // super === calling the parent - so we get the return result back
    let description = super.getDescription()

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`
    }

    return description
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age)
    this.homeLocation = homeLocation
  }

  getGreeting() {
    let greeting = super.getGreeting()

    if (this.homeLocation) {
      greeting += ` I'm visiting from ${this.homeLocation}`
    } else {
      return greeting
    }

    return greeting
  }
}

const bufalo = new Traveler('Búfalo', 15, 'Minnesota')
console.log(bufalo)
console.log(bufalo.getGreeting())

// create a new instance
// const me = new Student('Ryan Johnson', 37, 'Global Studies')
// console.log(me)
// console.log(me.hasMajor())
// console.log(me.getDescription())
// console.log(me.getGreeting())

// const mrAnon = new Student()
const mrAnon = new Traveler(undefined, undefined, 'Sunny Nowhere')
console.log(mrAnon)
// console.log(mrAnon.hasMajor())
// console.log(mrAnon.getDescription())
console.log(mrAnon.getGreeting())
