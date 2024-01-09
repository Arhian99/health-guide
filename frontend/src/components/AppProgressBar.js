import React from 'react'
import { Container, Image } from 'react-bootstrap'
import reactLogo from '../assets/logo192.png'
import useMediaQuery from '../hooks/useMediaQuery'

function AppProgressBar(props) {
    const isMobile = useMediaQuery('(max-width: 768px)');
    let imageStyle;
    let containerStyle;

    isMobile ? imageStyle = {
        maxWidth: '80px',
        maxHeight: '80px',

        position: 'absolute',

        right: '-40px',
        top: "-40px"

    } : imageStyle = {
        maxWidth: '100px',
        maxHeight: '100px',

        position: 'absolute',

        right: "-50px",
        top: "-50px"

    };

    isMobile ? containerStyle = {
        height: '60px'
    } : containerStyle = {
        height: '100px'
    };

    const imageContainerStyle = {
        width: `${props.completed}%`,
        position: 'relative'
    }

    return (
        <Container fluid style={containerStyle} className={"m-0 p-0 d-flex w-100 align-items-center justify-content-center ".concat(props.className)}>
            <Container className='m-0 p-0 border border-5 border-gray-500 bg-danger rounded mw-100'>
                <Container className='m-0 p-0' style={imageContainerStyle}>
                    <Image src={reactLogo} roundedCircle style={imageStyle} className='border bg-primary border-5 border-gray-500' />
                </Container>
            </Container>
        </Container>


    )
}

export default AppProgressBar;