// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.state = {
      // title: 'Indecision App',
      subtitle: 'Put your life in the hands of a computer!',
      // options: []
      options: props.options
    }
  }

  handleDeleteOptions() {
    // if we want to implicitly return an object shorthand we have to wrap in ()s
    this.setState(() => ({ options: [] }))
  }
  // handle delete option which will take an option (which you want to delete) and use set state to actually remove it
  handleDeleteOption(optionToRemove) {
    // we don't want options to be an event object
    // console.log('hdo', option)
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }))
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    alert(option)
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Item already exists'
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option) }))
  }

  render() {
    return (
      <div>
        <Header subtitle={this.state.subtitle} />
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
        {/* we'll pass the option into options to pass to option */}
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: 'Indecision'
}

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  )
}

const Options = (props) => {
  const numberOfOptions = props.options.length
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {/* now we'll add that option here as a prop */}
      {props.options.map((option) => (
        <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption} />
      ))}
    </div>
  )
}

const Option = (props) => {
  // now we can get our delete option here in our button
  return (
    <div>
      {props.optionText}
      {/* <button onClick={props.handleDeleteOption}>remove</button> */}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText)
        }}
      >
        remove
      </button>
    </div>
  )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e) {
    e.preventDefault()

    let option = e.target.elements.newOption.value.trim()

    const error = this.props.handleAddOption(option)
    // this.setState(() => ({ error: error }))
    this.setState(() => ({ error }))
  }
  render() {
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
