import React, { useState } from 'react'
import {Container, Button } from 'react-bootstrap'
function Test() {
    const [response, setResponse] = useState(null)

    async function fetchData() {
        fetch("/api").then((response) => response.json()).then((data) => {
            console.log(data);
            setResponse(data?.message);
        })
    }

    return (
        <Container className="d-flex flex-column align-items-center justify-content-center vh-100 vw-100">
            <Button onClick={fetchData}>Fetch</Button>
            <h1>{response}</h1>
        </Container>
    )
}

export default Test