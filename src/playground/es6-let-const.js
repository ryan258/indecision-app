var nameVar = 'Ryan'
// but you can overwrite it, ie change it
// and you can redeclare it, so you can redeclare a variable on accident and overwrite it on accident
var nameVar = 'Manny'
// ^^ there's really no practical application for this ^^
console.log('nameVar', nameVar)

let nameLet = 'Ike'
// you can reassign let, but not redeclare it
nameLet = 'Orson'
console.log('nameLet', nameLet)

const nameConst = 'Frank'
// you cannot reassign nor redeclare const
// nameConst = 'Bufalo' // error
console.log('nameConst', nameConst)

//! So start a variable off as a const
// - and then when you know it needs to be changed, switch it over to a let

//! Scoping is also different
// - var is function scoped - that variable is specific to the function it was defined in and can't be accessed from outside that function

function getPetName() {
  var petName = 'Snowball'
  return petName
}

// console.log(petName); // error

//! - let & const are also function scoped
//! -- but they are also block level scoped - like code blocks ie for loops and if statements
//!--- this is not the case with var

//! Block scoping
const fullName = 'Ryan Johnson'
let firstName

if (fullName) {
  firstName = fullName.split(' ')[0]
  console.log(firstName)
}

console.log(firstName)
