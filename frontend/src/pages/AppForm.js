import React, {useRef, useState} from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Form, Container, Button, Alert } from 'react-bootstrap';
import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';
import AppProgressBar from '../components/AppProgressBar';
import { TiPlus } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import TextBubble from '../components/TextBubble';

function AppForm(props) {
    const [activeFormPage, setActiveFormPage] = useState(1);
    const [curiosityAnswers, setCuriosityAnswers] = useState(0);
    const curiosityAnswersArray = useRef([]);

    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState(null);    

    const formik = useFormik({
        initialValues: {
            age: '',            // how old are you?
            email: '',          // what is your email address?
            phone: '',          // what is your phone number?
            goal: '',           // what do you hope to accomplish during this visit?
            isGoal: '',         // do you know why you are here today?
            diagnosis: '',      // What do you think your diagnosis is, if anything?
            curiosity: '',      // what are you confused by or what do you want to know more about?
            mainConcern: '',    // what is one thing you need to talk about before you leave today?
            emailCopy: false,   // I would like a copy of my responses sent to my email inbox.
        },
        validationSchema: Yup.object({
            age: Yup.string().required("Please enter your age").matches(/^[0-9]*$/, "Age must be a number."),
            email: Yup.string().email("Please enter a valid email address.").required("Please enter your email address."),
            phone: Yup.string().required("Please enter your phone number.").matches(/^[0-9]{10}$/, "Please enter a valid 10 digit phone number."),
            goal: Yup.string(),
            isGoal: Yup.string().oneOf(["yes", "no", "unsure"], "Please enter a valid value."),
            diagnosis: Yup.string(),
            // curiosity: Yup.string(),
            mainConcern: Yup.string(),
            emailCopy: Yup.boolean()
        }), 
        onSubmit: async (values) => {
            console.log(values);
            navigate("/review");
        }
    })

    function handleNextBtn() {
        if(activeFormPage < 4) {
            if(activeFormPage === 3) {
                formik.values.curiosity = curiosityAnswersArray.current;
            }
            setActiveFormPage(activeFormPage + 1);
        }
    }

    function handleBackBtn() {
        if(activeFormPage > 1) setActiveFormPage(activeFormPage - 1)
        else navigate("/");
    }

    function getFormPage(activePage) {
        switch(activePage) {
            case 1: return (
                <Container fluid className="m-0 p-0">
                    <AppProgressBar completed="10" className="mb-5"/>

                    <Form.Group controlId="age" className='fw-medium my-4'>
                        <Form.Label>How old are you?</Form.Label>
                        <Form.Control 
                            type="text"
                            name="age"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.age}
                            className="border border-primary border-2 py-2"
                        />
                        <Form.Text className='text-danger'>{formik.touched.age && formik.errors.age ? formik.errors.age : null}</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="email" className='fw-medium my-4'>
                        <Form.Label>What is your email address?</Form.Label>
                        <Form.Control 
                            type="email"
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className="border border-primary border-2 py-2"
                        />
                        <Form.Text className='text-danger'>{formik.touched.email && formik.errors.email ? formik.errors.email : null}</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="phone" className='fw-medium my-4'>
                        <Form.Label>What is your phone number?</Form.Label>
                        <Form.Control 
                            type="text"
                            name="phone"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone}
                            className="border border-primary border-2 py-2"
                        />
                        <Form.Text className='text-danger'>{formik.touched.phone && formik.errors.phone ? formik.errors.phone : null}</Form.Text>
                    </Form.Group>

                    <Form.Group controlId='isGoal' className='fw-medium my-4'>
                        <Form.Label>Do you know why you are here today?</Form.Label>
                        <Form.Check 
                            type="radio"
                            name="isGoal"
                            id="isGoalYes"
                            label="Yes"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value="yes"
                        />

                        <Form.Check 
                            type="radio"
                            name="isGoal"
                            id="isGoalNo"
                            label="No"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value="no"
                        />

                        <Form.Check 
                            type="radio"
                            name="isGoal"
                            id="isGoalUnsure"
                            label="Unsure"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value="unsure"
                        />
                        <Form.Text className='text-danger'>{formik.touched.isGoal && formik.errors.isGoal ? formik.errors.isGoal : null}</Form.Text>
                    </Form.Group>
                </Container>
            )
            case 2: return (
                <Container fluid className="m-0 p-0">
                    <AppProgressBar completed="33" className="mb-5"/>

                    <Form.Group controlId="goal" className='fw-medium my-4'>
                        <Form.Label>What do you hope to accomplish during this visit?</Form.Label>
                        <Form.Control 
                            type="text"
                            name="goal"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.goal}
                            className="border border-primary border-2 py-2"
                            as="textarea"
                            rows={5}
                        />
                        <Form.Text className='text-danger'>{formik.touched.goal && formik.errors.goal ? formik.errors.goal : null}</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="diagnosis" className='fw-medium my-4'>
                        <Form.Label>What do you think your diagnosis is, if anything?</Form.Label>
                        <Form.Control 
                            type="text"
                            name="diagnosis"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.diagnosis}
                            className="border border-primary border-2 py-2"
                            as="textarea"
                            rows={5}
                        />
                        <Form.Text className='text-danger'>{formik.touched.diagnosis && formik.errors.diagnosis ? formik.errors.diagnosis : null}</Form.Text>
                    </Form.Group>
                </Container>
            )
            case 3: return (
                <Container fluid className="m-0 p-0">
                    <AppProgressBar completed="66" className="mb-5"/>

                    <Form.Group controlId="curiosity" className='fw-medium my-4'>
                        <Form.Label>What are you confused by or what do you want to know more about?</Form.Label>
                        <Form.Control 
                            type="text"
                            name="curiosity"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.curiosity}
                            className="border border-primary border-2 py-2"
                            as="textarea"
                            rows={5}
                        />
                        <Button 
                            className='w-100 mt-4 d-flex align-items-center justify-content-center fw-semibold py-3' 
                            style={curiosityAnswers > 0 ? {opacity: 1} : {opacity: 0.60}}
                            onClick={() => {
                                curiosityAnswersArray.current.push(formik.values.curiosity);
                                setCuriosityAnswers(curiosityAnswers+1);
                                formik.values.curiosity="";

                            }}
                            >
                                {curiosityAnswers > 0 ? <span className='px-1 m-1 border border-2 border-white rounded-circle'>{curiosityAnswers}</span> : <TiPlus/>}<span className='m-0 p-0 mx-1'>Add another answer</span>
                        </Button>
                        <Form.Text className='text-danger'>{formik.touched.curiosity && formik.errors.curiosity ? formik.errors.curiosity : null}</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="mainConcern" className='fw-medium my-4'>
                        <Form.Label>What is one thing you need to talk about before you leave today?</Form.Label>
                        <Form.Control 
                            type="text"
                            name="mainConcern"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.mainConcern}
                            className="border border-primary border-2 py-2"
                            as="textarea"
                            rows={5}
                        />
                        <Form.Text className='text-danger'>{formik.touched.mainConcern && formik.errors.mainConcern ? formik.errors.mainConcern : null}</Form.Text>
                    </Form.Group>
                </Container>
            )
            case 4: return (
                <Container fluid className='m-0 p-0'>
                    <AppProgressBar completed="93" className="mb-4"/>

                    <Form.Group controlId='submission' >
                        <h1 className='fs-10 fw-semibold mb-4'>Summary</h1>

                        <TextBubble text={`I believe my diagnosis is ${formik.values.diagnosis}`} className="my-4"/>
                        <TextBubble text={`I want to know more about `.concat(formik.values.curiosity.map(value => {
                            return " "+value;
                        } ))} className="my-4"/>
                        <TextBubble text={`The one thing I must address with my doctor before I leave is ${formik.values.mainConcern}`} className="my-4"/>

                        <Container fluid className="m-0 p-0 d-flex align-items-start align-items-sm-center mb-5">
                            <Form.Check.Input
                                type="checkbox"
                                id="emailCopy"
                                name="emailCopy"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={true}
                            />
                            <Form.Check.Label
                                htmlFor="emailCopy"
                                className='fs-5 lh-sm'
                            >I would like a copy of my responses sent to my email inbox.</Form.Check.Label>
                        </Container>

                        <Form.Text className='mb-4'>
                            {errorMsg !== null ? <Alert>{errorMsg}</Alert> : null}
                        </Form.Text>
                    </Form.Group>
                    
                </Container>
            )
        }
    }

    return (
        <Container fluid className="m-0 px-4 pt-5 d-flex flex-column justify-content-center align-items-center px-md-8 mw-md-1200px">
            <Form onSubmit={formik.handleSubmit} className='m-0 p-0 w-100'>
                {getFormPage(activeFormPage)}

                {activeFormPage < 4 ? (
                    <Container fluid className='m-0 p-0 d-flex justify-content-between my-5'>
                        <BackButton text="Back" onClick={handleBackBtn}/>
                        <NextButton text="Next" onClick={handleNextBtn}/>
                    </Container>
                ) : (
                    <Container fluid className='m-0 p-0 w-100 d-flex justify-content-end'>
                        <Button type='submit' className='p-0 m-0 shadow-sm fs-3 fw-semibold px-5 py-2'>Finish!</Button>
                    </Container>
                )}
            </Form>
        </Container>
    )
}

export default AppForm;