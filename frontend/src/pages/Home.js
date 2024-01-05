import React from 'react'
import { Container, Image } from 'react-bootstrap'
import MainButton from '../components/MainButton'
import reactLogo from '../assets/logo192.png'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();

    return (
       <Container fluid className='m-0 p-0 px-3 d-flex flex-column justify-content-center align-items-center'>
            <h1 className='m-0 p-0 lh-sm my-5 text-center fs-10' >Your Health Appointment Guide</h1>
            <p className='m-0 p-0 lh-sm mb-5 text-center fs-4 mw-750px fw-semibold'>The following questionnaire is intended to help you feel calm, get you thinking about your health, and help you navigate your appointment.</p>
            <div className='d-flex flex-column justify-content-center align-items-center mb-6'>
                <Image src={reactLogo} roundedCircle className='m-0 my-2 p-0'/>
                <p className='m-0 p-0 fs-6 text-center fst-italic'>Credits: sentence about image credits.</p>
            </div>
            <div className="m-0 p-0 d-flex justify-content-center align-items-center my-5 w-80 mw-md-750px">
                <MainButton text="Lets go!" className="w-100" onClick={() => navigate("/form")}/>
            </div>
       </Container> 
    )
}

export default Home;