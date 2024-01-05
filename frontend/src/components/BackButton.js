import React from 'react'
import { IoArrowUndoSharp } from "react-icons/io5";
import { Button } from 'react-bootstrap'

function BackButton(props) {
    return (
        <Button 
            className={"shadow-sm px-3 fs-3 fw-semibold ".concat(props.className)} 
            onClick={props.onClick}
        >
            <div className='d-flex align-items-center m-0 p-0'>
                <IoArrowUndoSharp />
                <span className='ms-3 m-0 p-0 pt-1'>{props.text}</span>
            </div>
        </Button>
    )
}

export default BackButton