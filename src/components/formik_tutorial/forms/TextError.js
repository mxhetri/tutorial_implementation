import React from 'react';
import './YoutubeForm.css'

function TextError(props) {
    return (
        <div className='error-message'>
            {props.children}
        </div>
    );
}

export default TextError;