import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    // close on escape key or clicking bg
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Option"
    // close transition speed - time before gutting the div
    closeTimeoutMS={200}
    // override built in styles with a class name when we set a className on the modal
    className="modal"
  >
    <h3 className="modal__title">Selected Option 👻</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleClearSelectedOption}>
      You bet'cha!
    </button>
  </Modal>
)

export default OptionModal
