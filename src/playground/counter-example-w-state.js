// babel src/playground/counter-example-w-state.js --out-file=public/scripts/app.js --presets=env,react --watch

//!!! Component state is essential for interactive applications.
class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
    //! STEP 1: Come up with a default set of values
    this.state = {
      // count: 0
      count: props.count
    }
  }

  //! STEP 3: The state changes based on some event.
  handleAddOne() {
    this.setState((prevState) => {
      // define updates you want to make
      return {
        count: prevState.count + 1
      }
    })
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }
  handleReset() {
    // here you just don't need previous state
    this.setState(() => {
      return { count: 0 }
    })
    // obsolete syntax - the problem is when you're trying to update the state based on the current state values
    /*
    this.setState({
      count: 100
    })
    this.setState({
      count: this.state.count + 1
    })
    // the calls to setState are aSynchronous, they aren't guaranteed to happen/complete in order, so the 2nd set state won't catch the completion of the first setState
    */
  }

  render() {
    return (
      <div>
        {/* //! STEP 2: The component is rendered with default state values */}
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

Counter.defaultProps = {
  count: 42
}

ReactDOM.render(<Counter count={-10} />, document.getElementById('app'))

//! STEP 1: Come up with a default set of values (default state object)
// when our component runs for the very first time, it will use these default values - it's just an object with a bunch of key/value pairs.

// const theState = {
//   count: 0
// }

//! STEP 2: The component is rendered with default state values
// note: We never call render manually, it happens behind the scenes

// so the initial render happens and now nothing will happen until the user interacts

//! STEP 3: The state changes based on some event. IE. They do something that changes the state that runs one of our methods
//- of course, YOU DO NOT CHANGE STATE DIRECTLY!
//!-USE this.setState(prevState => {return {new:object}}) - the is the prefererred way!
// - allows us to manipulate the object
// - and then allow React to handle things its way

// FAQ
// - you do not have to provide all the pieces of state when you're updating state with setState, just the pieces you're changing
// -

//! STEP 4: The application RERENDERS itself, bringing the UI back upto date with the state.

//! STEP 5: ^^ back to step 3 ^^
