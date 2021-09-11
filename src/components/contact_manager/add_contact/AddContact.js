import React, {useState} from 'react';
import './AddContact.css'

function AddContact(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const emailChangeHandler = (event) => {
        setEmail(event.target.value)
    }

    const addressChangeHandler = (event) => {
        setAddress(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const contactData = {
            id: Math.random(),
            name: name,
            email: email,
            address: address
        }
        props.onAddContact(contactData);
        console.log('whole props data are', props)
        setName('');
        setAddress('');
        setEmail('');
        props.history.push('/');
    }

    return (
        <div className='contact-form'>
            <form onSubmit={submitHandler}>
                <div className='form-controls'>
                    <div className='form-control'>
                        <label>Name: </label>
                        <input type='text' name='name' value={name} placeholder='enter name here'
                               onChange={nameChangeHandler}/>
                    </div>
                    <div className='form-control'>
                        <label>Email: </label>
                        <input type='email' name='email' value={email} placeholder='enter email here'
                               onChange={emailChangeHandler}/>
                    </div>
                    <div className='form-control'>
                        <label>Address: </label>
                        <input type='address' name='address' value={address} placeholder='enter address here'
                               onChange={addressChangeHandler}/>
                    </div>
                </div>
                <div className='btn-addContact'>
                    <button>Add Contact</button>
                </div>
            </form>
        </div>
    );
}

export default AddContact;