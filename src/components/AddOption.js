import React from 'react'

export default class AddOption extends React.Component {
  state = {
    error: undefined
  }

  handleAddOption = (e) => {
    e.preventDefault()
    // console.log(testting)

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
