import React from 'react'
import Option from './Option'

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

export default Options
