import React, {useState} from 'react'
import {Container, Form } from 'react-bootstrap'
import { FaStar } from "react-icons/fa";

function Rating(props) {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        [...Array(5)].map((star, index) => {
            const givenRating = index+1

            return (
                <label className='m-0'>
                    <input 
                        type="radio"
                        name="rating"
                        id={`${givenRating}`}
                        // onChange={props.formik.handleChange}
                        // onBlur={props.formik.handleBlur}
                        value={`${givenRating}`}
                        className='d-none'
                        onBlur={props.formik.handleBlur}
                        onChange={() => {
                            setRating(givenRating);
                            props.formik.values.rating = givenRating;
                        }}
                    />
                    <span 
                        style={{
                            color: givenRating <= (hover || rating) ? '000' : "rgb(192,192,192)",
                            cursor: 'pointer'
                        }}
                        onMouseEnter={() => setHover(givenRating)}
                        onMouseLeave={() => setHover(null)}
                        className='fs-1'
                    >
                        <FaStar color={givenRating <= (hover || rating) ? '#0138a3' : "rgb(192,192,192)"} />
                    </span>
                </label>
            )
        })
    )
}

export default Rating