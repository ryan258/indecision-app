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
    //! STEP 1.5: Bind the method we're passing down from here through props so it sets the proper context.
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    //! STEP 1.5: Bind the method we're passing down from here through props so it sets the proper context.
    this.handlePick = this.handlePick.bind(this)
    this.state = {
      title: 'Indecision App',
      subtitle: 'Put your life in the hands of a computer!',
      options: ['Orson', 'Manny', 'Ike']
      // options: ['Orson', 'Manny', 'Ike']
    }
  }
  // functions we'll pass down to child components so they can make changes up stream
  // - we can pass down functions to children from parents to affect things upstream
  //! STEP 1: Create the method we want to pass down to child component that will affect the parent state
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  //! STEP 1: Create the method we want to pass down to child component that will affect the parent state
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    alert(option)
  }

  render() {
    // const title = 'Indecision App'
    // const subtitle = 'Put your life in the hands of a computer!'
    // const options = ['Orson', 'Manny', 'Ike']

    return (
      <div>
        <Header title={this.state.title} subtitle={this.state.subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          //! STEP 2: Create a new prop and set it to the method we want to pass down
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          //! STEP 2: Create a new prop and set it to the method we want to pass down
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption />
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
    //! STEP 3: Use the method we're passing down through props
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
    //! STEP 3: Use the method we're passing down through props
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
  handleAddOption(e) {
    e.preventDefault()

    let option = e.target.elements.newOption.value.trim()

    if (option) {
      // app.options.push(option)
      alert(option)
      e.target.elements.newOption.value = ''
    }
  }
  render() {
    return (
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="newOption" />
        <button>Add Option</button>
      </form>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
