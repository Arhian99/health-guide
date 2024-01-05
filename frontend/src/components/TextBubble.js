import React from 'react'
import { Container } from 'react-bootstrap'

function TextBubble(props) {
    return (
        <Container fluid className={"m-0 p-0 bg-light color-primary fw-medium p-3 rounded-3 fs-3 ".concat(props.className)}>
            {props.text}
        </Container>
    )
}

export default TextBubble