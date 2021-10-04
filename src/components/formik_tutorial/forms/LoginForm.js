import React from 'react';
import {Formik, Form} from "formik";
import * as Yup from 'yup';
import FormikControl from "./FormikControl";

function LoginForm(props) {
    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required("Required"),
        password: Yup.string().required(' Required')
    })

    const onSubmit = (values) => {
        console.log('form data', values)
    }
    return (

        <div className='form-container'>
            <div className='form-title'>
                <h3>Login Form</h3>
            </div>
            <Formik initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}>
                {
                    (formik) => {
                        return (
                            <Form>
                                <FormikControl control='input'
                                               type='email'
                                               label='Email'
                                               name='email'/>
                                <FormikControl control='input'
                                               name='password'
                                               label='Password'
                                               type='password'/>
                                <button  className='btn' type='submit' disabled={!formik.isValid}>
                                    Submit
                                </button>
                            </Form>
                        )

                    }
                }
            </Formik>
        </div>
    );
}

export default LoginForm;