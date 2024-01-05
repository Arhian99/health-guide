import React from 'react'
import { IoArrowRedoSharp } from "react-icons/io5";
import { Button } from 'react-bootstrap'

function NextButton(props) {
  return (
    <Button 
        className={"shadow-sm px-3 fs-3 fw-semibold ".concat(props.className)} 
        onClick={props.onClick}
    >
      <div className='d-flex align-items-center m-0 p-0'>
        <span className='m-0 p-0 me-3 pt-1'>{props.text}</span>
        <IoArrowRedoSharp />
      </div>
    </Button>
  )
}

export default NextButton