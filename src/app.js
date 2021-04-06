// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

// stateless components don't have life-cycle components
// - which means they're really fast since they don't have to manage that
// - they just render things

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.state = {
      subtitle: 'Put your life in the hands of a computer!',
      options: props.options
    }
  }

  // componentDidMount - we never explicitly call this - it gets called internally - runs when the component first mounts
  componentDidMount() {
    // console.log('fetching data 👻')
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      // now we can do something with it
      // this.setState(() => ({ options: options }))
      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (error) {
      // do nothing at all! 🍺
    }
  }
  // componentDidUpdate - fires after the props or state values change
  // - really useful for figuring out when data has changed
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      // console.log('saving data 🥳')
      localStorage.setItem('options', json)
    }
    // as well as arguments (prevProps, prevState)
    // - good for figuring out if a specific part of a component updated
    // here we have access to this.state and this.props
  }
  // componentWillUnmount - fires just before your component goes away to allow us to do something meaningful - usually barely used
  componentWillUnmount() {
    console.log('componentWillUnmount 🔥')
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }))
  }

  handleDeleteOption(optionToRemove) {
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
      {props.options.length === 0 && <p>Please add an option, or else...</p>}
      {props.options.map((option) => (
        <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption} />
      ))}
    </div>
  )
}

const Option = (props) => {
  return (
    <div>
      {props.optionText}
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
    this.setState(() => ({ error }))

    if (!error) {
      e.target.elements.newOption.value = ''
    }
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
