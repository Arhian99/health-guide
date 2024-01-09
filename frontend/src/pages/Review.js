import React, {useState} from 'react'
import { Container, Form, Button, Alert } from 'react-bootstrap'
import * as Yup from 'yup'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Rating from '../components/Rating';
import axios from '../api/axios';
function Review() {
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState(null);

    const formik = useFormik({
        initialValues: {
            doctorName: '',
            rating: '',
            comment: ''
        },
        validationSchema: Yup.object({
            doctorName: Yup.string().required("Please enter doctor name"),
            rating: Yup.string().required("Please enter a rating"),
            comment: Yup.string()
        }),
        onSubmit: async (values) => {
            try {
                const response = axios.post(
                    "/api/submitReview",
                    values
                );

                navigate("/");

            } catch(error){
                console.log(error);
                setErrorMsg(error?.data?.message);

            }
        }
    })
    return (
        <Container className='d-flex flex-column m-0 p-0 px-4 text-center pt-5 justify-content-center align-items-center mw-750px'>
            <h1>Thank you for entrusting us with your care!</h1>
            <p className='fs-4 fw-medium lh-sm my-3'>Help your doctor provide an even better experience next time by leaving them a quick review.</p>

            <Form onSubmit={formik.handleSubmit} className='w-100 mw-750px text-start d-flex flex-column'>

                <Form.Group controlId="doctorName" className='fw-semibold my-4'>
                    <Form.Label>What is your doctor's name?</Form.Label>
                    <Form.Control 
                        type="text"
                        name="doctorName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.doctorName}
                        className="border border-primary border-2 py-2"
                    />
                    <Form.Text className='text-danger'>{formik.touched.doctorName && formik.errors.doctorName ? formik.errors.doctorName : null}</Form.Text>
                </Form.Group>

                <Form.Group controlId="rating" className='m-0 p-0 fw-semibold mb-4 d-flex flex-column'>
                    <Form.Label className='m-0 p-0'>Rating: </Form.Label>
                    <Container fluid className='m-0 p-0'>
                        <Rating formik={formik} />
                    </Container>
                    <Form.Text className='text-danger'>{formik.touched.rating && formik.errors.rating ? formik.errors.rating : null}</Form.Text>
                </Form.Group>

                <Form.Group controlId="comment" className='fw-semibold mb-4'>
                    <Form.Label>Comment: </Form.Label>
                    <Form.Control 
                        type="text"
                        name="comment"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.comment}
                        className="border border-primary border-2 py-2"
                        as="textarea"
                        rows={5}
                    />
                    <Form.Text className='text-danger'>{formik.touched.comment && formik.errors.comment ? formik.errors.comment : null}</Form.Text>
                </Form.Group>

                <Form.Text className='mb-4'>
                    {errorMsg !== null ? <Alert variant="danger" >{errorMsg}</Alert> : null}
                </Form.Text>

                <Button type="submit" className='fw-semibold px-5 py-2 fs-5 shadow-sm'>Submit</Button>
            </Form>
        </Container>
    )
}

export default Review;