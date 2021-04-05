// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      // title: 'Indecision App',
      subtitle: 'Put your life in the hands of a computer!',
      // options: []
      options: props.options
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

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Item already exists'
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      }
    })
  }

  render() {
    return (
      <div>
        <Header subtitle={this.state.subtitle} />
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} />
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
      {props.options.map((option) => (
        <Option key={option} optionText={option} />
      ))}
    </div>
  )
}

const Option = (props) => {
  return <div>{props.optionText}</div>
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
    this.setState(() => {
      return {
        error: error
      }
    })
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
