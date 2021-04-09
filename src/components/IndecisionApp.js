import React from 'react'

import Action from './Action'
import AddOption from './AddOption'
import Header from './Header'
import Options from './Options'

import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
  state = {
    subtitle: 'Put your life in the hands of a computer!',
    // options: props.options
    options: [],
    // define the state here, then pass it through the <OptionModal /> as a prop
    selectedOption: undefined
  }
  //! old syntax
  // constructor(props) {
  //   super(props)
  //   this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
  //   this.handlePick = this.handlePick.bind(this)
  //   this.handleAddOption = this.handleAddOption.bind(this)
  //   this.handleDeleteOption = this.handleDeleteOption.bind(this)
  //   this.state = {
  //     subtitle: 'Put your life in the hands of a computer!',
  //     // options: props.options
  //     options: []
  //   }
  // }

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

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }))
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }))
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    // alert(option)
    // when thing is clicked it will set the state to a random option resulting in a truthy value
    this.setState(() => ({
      selectedOption: option
    }))
  }

  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }))
  }

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Item already exists'
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option) }))
  }

  render() {
    console.log('render!')
    return (
      <div>
        <Header subtitle={this.state.subtitle} />
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
        <AddOption handleAddOption={this.handleAddOption} />
        {/* pass the piece of state down to the component */}
        <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption} />
      </div>
    )
  }
}

// IndecisionApp.defaultProps = {
//   options: []
// }
