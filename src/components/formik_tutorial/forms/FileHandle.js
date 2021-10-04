import React from 'react';
import {Field} from "formik";

function FileHandle(props) {
    const {name, label, ...rest} = props

    return (
        <div>
            <label htmlFor={name}>{label}:</label>
            <Field name={name}>
                {
                    ({form, field}) => {
                        const {setFieldValue} = form;
                        return(
                            <input type='file' id={name} onChange={(event => {
                                setFieldValue('file', event.currentTarget.files[0])
                            })}/>
                        )
                    }
                }
            </Field>
        </div>
    );
}

export default FileHandle;