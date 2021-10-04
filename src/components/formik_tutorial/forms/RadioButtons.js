import React from 'react';
import {ErrorMessage, Field} from "formik";
import TextError from "./TextError";

function RadioButtons(props) {
    const {label, name, options, ...rest} = props;
    return (
        <div>
            <label htmlFor={name}>{label}:</label>
            <Field name={name} {...rest}>
                {
                    ({field}) => {
                        return options.map(option => {
                            return (
                                <div className='select-radio' key={option.key}>
                                    <input type='radio'
                                           id={option.value}
                                           {...field} value={option.value}
                                           checked={field.value === option.value}/>
                                    <label htmlFor={option.value}>{option.key}</label>
                                </div>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    );
}

export default RadioButtons;