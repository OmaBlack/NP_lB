

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './StartApplication.css';
//import {useRef, useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup"



const StartCenteredDiv = () => {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: ""
        },

        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email address").required("email is required")
        }),

        onSubmit: (values) => {
            navigate("/getInstanceLong")
        },
    })
    console.log(formik.touched);
    return (
        <div>
            <div className="centeredDiv">
                <h2 className="text">Get started with your application</h2>
                <div className ='test-holder'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <br></br>
                    ullamcorper mattis, pulvinar dapibus leo.</div>
                <div className='email-textHolder'>
                    EMAIL ADDRESS
                </div>


                <form onSubmit={formik.handleSubmit}>
                <div>
                    {formik.touched.email && formik.errors.email ? <p className="formik_error">{formik.errors.email}</p> : null}
                    <div>
                        <input 
                        type ='email' 
                        id='proceed' 
                        name='email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        />
                    </div>
                </div>
                <div className="divbutton">
                    {/* <Link to='/getInstanceLong'> */}
                    <button type="submit" className='button'>Proceed</button>
                    {/* </Link> */}
                </div>
                </form>
            </div>
        </div>

    );
}

export default StartCenteredDiv;