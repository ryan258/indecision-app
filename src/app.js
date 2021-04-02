// a react component can just be a new class

// Component is a class itself that gives us the features of React
// react components require that a special method -> render
// - and this returns all the JSX

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
    // this = access to current instance of this component - and we get access to this's props through this.props
    // console.log(this.props) // {title: "Indecision App"}
    return (
      <div>
        {/* so we can use props to populate */}
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
  }
  render() {
    const numberOfOptions = this.props.options.length
    return (
      <div>
        {/* 1a) here the binding for 'this' works */}
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {/* <p key={option}>{option}</p> */}
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

// to render to the screen we need to use ReactDOM
ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
