import React from 'react';
import * as Yup from 'yup';
import {Form, Formik} from "formik";
import './YoutubeForm.css'
import FormikControl from "./FormikControl";

function FormikContainer(props) {

    const dropdownOptions = [
        { key: 'Select an option', value: ''},
        {key: 'Option 1', value: 'option1'},
        {key: 'Option 2', value: 'option2'},
        {key: 'Option 3', value: 'option3'},
        {key: 'Option 4', value: 'option4'}
    ]

    const radioOptions = [
        {key: 'Option 1', value: 'roption1'},
        {key: 'Option 2', value: 'roption2'},
        {key: 'Option 3', value: 'roption3'},
        {key: 'Option 4', value: 'roption4'}
    ]
    const checkboxOptions = [
        {key: 'Option 1', value: 'coption1'},
        {key: 'Option 2', value: 'coption2'},
        {key: 'Option 3', value: 'coption3'},
        {key: 'Option 4', value: 'coption4'}
    ]
    const initialValues = {
        email: '',
        description: '',
        selectOption: '',
        radioOption: '',
        checkboxOption: [],
        birthDate: '',
        file: ''
    }
    const validationSchema = Yup.object({
        email: Yup.string().required('Input Required'),
        description: Yup.string().required('Input Required'),
        selectOption: Yup.string().required('Selection Required'),
        radioOption: Yup.string().required('Selection Required'),
        checkboxOption: Yup.array().required('Required'),
        birthDate: Yup.date().required('Pick a date').nullable(),
        file: Yup.string().required('Input required')
    });
    const onSubmit = values =>
        console.log('form validation', values)
    return (
        <div className='form-container'>
            <div className='form-title'>
                <h3>Registration Form</h3>
            </div>
            <Formik initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}>
                {(formik) => {
                    return (
                        <Form>
                            <FormikControl control='input'
                                           type='email'
                                           label='Email'
                                           name='email'/>
                            <FormikControl control= 'textarea'
                                           type='text'
                                           label= 'Description'
                                            name='description'/>
                            <FormikControl control='select'
                                           label='select a topic'
                                           name='selectOption'
                                           options={dropdownOptions}/>
                            <FormikControl control='radio'
                                           label='Radio topic'
                                           name='radioOption'
                                           options={radioOptions}/>
                            <FormikControl control='checkbox'
                                           label='checkbox topic'
                                           name='checkboxOption'
                                           options={checkboxOptions}/>
                            <FormikControl control='date'
                                           label='Pick a date'
                                           name='birthDate'/>
                            <FormikControl control='file'
                                           label = "Select a file"
                                           name='file'/>
                            <button className='btn' type='submit'>Submit</button>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    );
}

export default FormikContainer;