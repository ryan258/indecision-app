// a react component can just be a new class

// Component is a class itself that gives us the features of React
// react components require that a special method -> render
// - and this returns all the JSX

// component STATE - allows our components to manage some data
// - when data in the component changes, that component will automatically rerender to reflect those changes
// - we don't want to keep running render() commands ourselves
// -- we can manipulate the data
// -- the component can worry about rerendering itself

class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision App'
    const subtitle = 'Put your life in the hands of a computer!'
    const options = ['Orson', 'Manny', 'Ike']

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
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
  handlePick() {
    alert('handlePick!')
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props)
    this.handleRemoveAll = this.handleRemoveAll.bind(this)
  }

  handleRemoveAll() {
    console.log(this.props.options)
  }
  render() {
    const numberOfOptions = this.props.options.length
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
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
