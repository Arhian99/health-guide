import React from 'react'
import { Button } from 'react-bootstrap'

function MainButton(props) {
    return (
        <Button 
            className={"shadow-lg px-5 py-3 fs-1 fw-semibold ".concat(props.className)} 
            onClick={props.onClick}
        >
            {props.leftIcon}{props.text}{props.rightIcon}
        </Button>
    );
}

export default MainButton