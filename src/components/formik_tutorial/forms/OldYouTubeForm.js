import React from 'react';
import './YoutubeForm.css';
import {useFormik} from "formik";
import * as Yup from 'yup';

function OldYouTubeForm(props) {
    const initialValues = {
        name: '',
        email: '',
        channel: '',
    }
    const onSubmit = values => {
        console.log('form data', values);
    }
    const validate = values => {
        let errors = {};
        if (!values.name){
            errors.name = 'Input Required';
        }
        if (!values.email){
            errors.email = 'Input Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            errors.email = "Invalid email address";
        }
        if (!values.channel){
            errors.channel = 'Input Required'
        }
        return errors;
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Input Required !'),
        email: Yup.string().required('Input Required ').email('Invalid email format'),
        channel: Yup.string().required('Input Required !'),
    });

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        // validate,
    });
    console.log('formik', formik)

    return (
        <div className='form-container'>
            <div className='form-title'>
                <h3>YouTube Form</h3>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' name='name'
                       {...formik.getFieldProps('name')}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.name} />
                {formik.touched.name && formik.errors.name ?
                    <div className='error-message'>{formik.errors.name}</div> : null}
                <label htmlFor='email'>E-mail:</label>
                <input type='text' id='email' name='email'
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.email}/>
                {formik.touched.email && formik.errors.email ?
                    <div className='error-message'>{formik.errors.email}</div> : null}
                <label htmlFor='channel'>Channel:</label>
                <input type='text' id='channel' name='channel'
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.channel}/>
                {formik.touched.channel && formik.errors.channel ?
                    <div className='error-message'>{formik.errors.channel}</div> : null}
                <button type='submit' className='btn'>Submit</button>
            </form>
        </div>
    );
}

export default OldYouTubeForm;