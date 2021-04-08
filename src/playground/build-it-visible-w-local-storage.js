// babel src/playground/build-it-visible-w-local-storage.js --out-file=public/scripts/app.js --presets=env,react --watch

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Visibility Toggle w/ State',
      visibility: false
    }
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
  }

  handleToggleVisibility(prev) {
    this.setState((prev) => {
      return {
        visibility: !prev.visibility
      }
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Text' : 'Show Text'}</button>
        {this.state.visibility && <p>Behold, your text is now visible! 🤗</p>}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))
