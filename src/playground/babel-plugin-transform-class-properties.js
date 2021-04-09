//! THIS IS AN EXAMPLE OF USING babel-plugin-transform-class-properties
// - this will be great for our event handlers!

//! old syntax - pre babel-plugin-transform-class-properties
// - it's just not very elegant
class OldSyntax {
  constructor() {
    this.name = 'Manny'
    // - storing the method in a variable breaks the binding so we must bind it here in the constructor
    this.getGreeting = this.getGreeting.bind(this)
  }
  getGreeting() {
    return `Hellooooo, ${this.name}`
  }
}
const oldSyntax = new OldSyntax()
console.log(oldSyntax) // OldSyntax {name: "Manny"}
const getGreeting2 = oldSyntax.getGreeting
console.log(getGreeting2()) // Helloooooo, Manny

//! new syntax - post babel-plugin-transform-class-properties
// - where we have to create a constructor just for a single property
// - and we can create methods that won't have their binding all messed up
// -- like storing the method in a variable breaks the binding
class NewSyntax {
  // now we can skip a bunch of typing
  name = 'Ike'
  // handle methods without the bloat or the binding issues
  // - arrow functions don't have their own this binding, they just use whatever is the parent scope's 'this' is, which for classes the 'this' will be the instance
  getGreeting = () => {
    return `Hellooooo, ${this.name}`
  }
}

const newSyntax = new NewSyntax()
console.log(newSyntax) // NewSyntax {name: "Ike"}
const newGetGreeting = newSyntax.getGreeting
console.log(newGetGreeting()) // Hellooooooo, Ike
