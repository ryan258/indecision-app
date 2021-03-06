import React from 'react'

import Action from './Action'
import AddOption from './AddOption'
import Header from './Header'
import Options from './Options'

import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
  state = {
    subtitle: 'Put your life in the hands of a computer!',
    options: [],
    selectedOption: undefined
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (error) {
      // do nothing at all! 🍺
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }

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
        <div className="container">
          <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
          <div className="widget">
            <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption} />
      </div>
    )
  }
}
