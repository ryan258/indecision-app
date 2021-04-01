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

// create a new instance
const me = new Person('Ryan Johnson', 37)
console.log(me)
console.log(me.getGreeting())
console.log(me.getDescription())

const mrAnon = new Person()
console.log(mrAnon)
console.log(mrAnon.getGreeting())
console.log(mrAnon.getDescription())
