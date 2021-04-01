// a react component can just be a new class

// Component is a class itself that gives us the features of React
// react components require that a special method -> render
// - and this returns all the JSX

class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer! </h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <ul>
        <li>options</li>
        <li>component</li>
        <li>here!</li>
        <Option />
        <Option />
        <Option />
      </ul>
    )
  }
}

class Option extends React.Component {
  render() {
    return <li>Option component</li>
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <form onSubmit={() => alert('hello!')}>
        <input type="text" name="" />
        <button>Add Option - add option component</button>
      </form>
    )
  }
}

// to render to the screen we need to use ReactDOM
ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
