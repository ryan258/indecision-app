// MDN - .bind() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind

// you can use .bind in 3 places
// 1 - where you're calling the method (on the JSX) and since render isn't an event handler, it won't lose that binding, so we can just set it to this - ie <button onClick={this.handleSomething.bind(this)}>
// -- this works but is kind of inefficient as it requires us to rerun bind every time the component rerenders

// 2 - override the constructor function
// - this way we're not having to bind with every render - the binding just runs once, when the component is initialized - WAY more efficient!
// - and have to make the calls inline

//! in this case we'll be using .bind() to reset the context
/*class Options extends React.Component {

  // override this through the constructor function
  // - props in the constructor function works the same way as it does in the render method - refers to the same thing, the constructor function just gets it passed in

  constructor(props) {

    // so we don't break anything we have to call super(props)

    super(props) // so we have access to this.props

    // now we can add on behavior
    // like bind handleRemoveAll

    this.handleRemoveAll = this.handleRemoveAll.bind(this)

    // now whereever we call handleRemoveAll, the context is correct
  }
  // methods are bound to the class instance

  handleRemoveAll() {
    // alert('removeAll!')
    // 1b) but here we've broken the binding
    console.log(this.props.options)
    // 1c) resulting in 'Can't find props of null' - so we're losing the 'this' binding
  }*/

////////// The Issue at hand

const obj = {
  name: 'Scrapper',
  getName() {
    return this.name
  }
}

// reference to the method
// const getName = obj.getName

// console.log(obj.getName()) // this works
// console.log(getName()) // error: can't read property 'name' of undefined
// but both are trying to run the exact same code, so wth?
// problem is that the contexts are different
// - console.log(obj.getName() - has it's instance
// - getName() - is merely referencing the method, but missing the context, basically the context is lost and it stands alone as a regular function

// like

/*const func = function () {
  console.log(this)
}

func()*/

//! so basically we need to figure a way to set the 'this' binding
// const getName = obj.getName.bind(obj)
//! call bind(this) will get our function on obj back
// the first argument of .bind() sets the this context - error gone!

// you can even force it to be something else
const getName = obj.getName.bind({ name: 'Scooty' }) // Scooty
console.log(getName())
