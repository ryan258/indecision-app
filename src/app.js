// a react component can just be a new class

// Component is a class itself that gives us the features of React
// react components require that a special method -> render
// - and this returns all the JSX

// component STATE - allows our components to manage some data
// - when data in the component changes, that component will automatically rerender to reflect those changes
// - we don't want to keep running render() commands ourselves
// -- we can manipulate the data
// -- the component can worry about rerendering itself
// new props will cause children to rerender

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    //! STEP 1.5: Bind it
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      title: 'Indecision App',
      subtitle: 'Put your life in the hands of a computer!',
      options: []
      // options: ['Orson', 'Manny', 'Ike']
    }
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    alert(option)
  }

  //! STEP 1: Create a method to pass down with an argument
  handleAddOption(option) {
    //! STEP 6: Add conditional logic validation checks
    if (!option) {
      return 'Enter valid value to add item'
      // and this gets returned down to the AddOption component
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Item already exists'
    }
    // console.log(option)
    //! STEP 5: Do something with the data that was passed up from the child component
    this.setState((prevState) => {
      //! don't do this as it will mutate the array
      //! prevState.options.push(option)
      // we want to compute a new one w/ array.concat
      return {
        options: prevState.options.concat(option)
      }
    })
  }

  render() {
    //! STEP 2: Pass it down
    return (
      <div>
        <Header title={this.state.title} subtitle={this.state.subtitle} />
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} />
        {/* vv pass it down vv */}
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>
          What should I do?
        </button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    const numberOfOptions = this.props.options.length
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {this.props.options.map((option) => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return <div>Option: {this.props.optionText}</div>
  }
}

class AddOption extends React.Component {
  //! STEP 4: constructor function to handle the right methods in the render
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    //! STEP 7: Add state to this component
    this.state = {
      error: undefined
    }
  }
  // this handleAddOption that is built into the function that is just incharge of doing things when the form gets submitted
  handleAddOption(e) {
    e.preventDefault()

    let option = e.target.elements.newOption.value.trim()

    // validation handled up above
    /*if (option) {
      // app.options.push(option)
      //! STEP 3: Call the method being passed down by props and passing in an argument/data that will be passed in the parent component
      // this handleAddOption will get things applied to state in the parent
      this.props.handleAddOption(option)
      e.target.elements.newOption.value = ''
    }*/
    // this.props.handleAddOption(option)

    const error = this.props.handleAddOption(option)
    //! ENTER THE LAND OF COMPONENT STATE !//
    //! STEP 8: When submission has an error we want to update error state
    this.setState(() => {
      return {
        error: error
      }
    })
  }
  render() {
    //! STEP 9: RENDER ERROR MESSAGE IF THERE IS ONE - if there is no error the method will return back undefined and no error message will appear
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="newOption" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
