// babel src/playground/counter-example-w-local-storage.js --out-file=public/scripts/app.js --presets=env,react --watch

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.state = {
      count: 0
      // count: props.count
    }
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('count')
      const count = JSON.parse(json)

      if (count) {
        this.setState(() => ({ count }))
      }
    } catch (error) {}
  }

  componentDidUpdate(prevProps, prevState) {
    // check if count actually changed
    if (prevState.count !== this.state.count) {
      console.log('component did update')
      const json = JSON.stringify(this.state.count)
      localStorage.setItem('count', json)
    }
  }

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
    this.setState(() => ({ count: 0 }))
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

// Counter.defaultProps = {
//   count: 42
// }

ReactDOM.render(<Counter count={-10} />, document.getElementById('app'))
