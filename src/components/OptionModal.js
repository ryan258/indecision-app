import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    // close on escape key or clicking bg
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Option"
  >
    <h3>Selected Option 👻</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleClearSelectedOption}>You bet'cha!</button>
  </Modal>
)

export default OptionModal
