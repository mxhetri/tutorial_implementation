import React, {useState} from 'react';
import './YoutubeForm.css';
import {ErrorMessage, Field, FieldArray, Form, Formik} from "formik";
import * as Yup from 'yup';
import TextError from "./TextError";

function YouTubeForm(props) {
    const [formValues, setFormValues] = useState(null);
    const initialValues = {
        name: 'kamal',
        email: '',
        channel: '',
        comments: '',
        address: '',
        social: {
            facebook: '',
            twitter: ''
        },
        phoneNumbers: ['', ''],
        phNumbers: ['']
    }
    const savedValues = {
        name: 'xhetri',
        email: 'xhetri@gmail.com',
        channel: 'xhetri',
        comments: 'welcome to xhetri',
        social: {
            facebook: '',
            twitter: ''
        },
        phoneNumbers: ['', ''],
        phNumbers: ['']
    }
    const onSubmit = (values, onSubmitProps) => {
        console.log('form data', values);

        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm()
    }
    const validate = values => {
        let errors = {};
        if (!values.name) {
            errors.name = 'Input Required';
        }
        if (!values.email) {
            errors.email = 'Input Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Invalid email address";
        }
        if (!values.channel) {
            errors.channel = 'Input Required'
        }
        return errors;
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Input Required !'),
        email: Yup.string().required('Email required').email('Invalid email format'),
        channel: Yup.string().required('Input Required !'),
    });


    return (
        <div className='form-container'>
            <div className='form-title'>
                <h3>YouTube Form</h3>
            </div>
            <Formik initialValues={formValues || initialValues }
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    enableReinitialize>
                {formik => {
                    console.log('formik props', formik)
                    return (
                        <Form>
                            <label htmlFor='name'>Name:</label>
                            <Field type='text' id='name' name='name'/>
                            <ErrorMessage component={TextError} name='name'/>

                            <label htmlFor='email'>E-mail:</label>
                            <Field type='text' id='email' name='email'/>
                            <ErrorMessage  name='email' >
                                {
                                    (errorMessage) =>
                                        <div className='error-message'>{errorMessage}</div>
                                }
                            </ErrorMessage>

                            <label htmlFor='channel'>Channel:</label>
                            <Field type='text' id='channel' name='channel'/>
                            <ErrorMessage component={TextError} name='channel'/>

                            <label htmlFor='address'>Address: </label>
                            <Field name='address'>
                                {
                                    (props) => {
                                        const {field, form, meta} = props;
                                        return <input id='address' {...field}/>
                                    }
                                }
                            </Field>

                            <label htmlFor='facebook'>Facebook Profile</label>
                            <Field id='facebook' name='social.facebook'/>

                            <label htmlFor='twitter'>Twitter Profile</label>
                            <Field id='twitter' name='social.twitter'/>

                            <label htmlFor='phoneNumbers'>Primary Phone Number: </label>
                            <Field id='twitter' name='phoneNumbers[0]'/>
                            <label htmlFor='phoneNumbers'>Secondary Phone Number: </label>
                            <Field id='twitter' name='phoneNumbers[1]'/>

                            <label htmlFor='comment'>Comment:</label>
                            <Field as='textarea' id='comment' name='comment'/>

                            <label>List of Phone Numbers: </label>
                            <FieldArray name='phNumbers'>
                                {(fieldArrayProps) => {
                                    const {push, remove, form} = fieldArrayProps;
                                    const {values} = form;
                                    return (<div>
                                        {values.phNumbers.map((phNumber, index) => (
                                            <div key={index}>
                                                <Field name={`phNumbers[${index}]`}/>
                                                { index > 0 && (
                                                    <button type='button' className='field-array-btn' onClick={() =>
                                                        remove(index)}>-</button>)}
                                                <button type='button' className='field-array-btn' onClick={() =>
                                                    push('')}>+</button>
                                            </div>
                                        ))}
                                    </div>)
                                }}
                            </FieldArray>
                            <button type='button' className='btn' onClick={() => setFormValues(savedValues)}>
                                Load saved data
                            </button>
                            <button type='submit' className='btn'
                                    disabled={!formik.isValid}>
                                Submit
                            </button>
                        </Form>
                    )
                }}
            </Formik>

        </div>
    );
}

export default YouTubeForm;