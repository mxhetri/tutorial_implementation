import React, {useState} from 'react';

function UpdateContact(props) {
    const {id, name, email, address} = props.location.state.contact;

    const [updatedName, setUpdatedName] = useState(name);
    const [updatedEmail, setUpdatedEmail] = useState(email);
    const [updatedAddress, setUpdatedAddress] = useState(address);


    const nameChangeHandler = (event) => {
        setUpdatedName(event.target.value);
    }

    const emailChangeHandler = (event) => {
        setUpdatedEmail(event.target.value)
    }

    const addressChangeHandler = (event) => {
        setUpdatedAddress(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const contactData = {
            id: id,
            name: updatedName,
            email: updatedEmail,
            address: updatedAddress
        }
        props.onUpdateContact(contactData);
        // console.log('whole props data are', contactData)
        setUpdatedName('');
        setUpdatedAddress('');
        setUpdatedEmail('');
        props.history.push('/');
    }
    return (
        <div className='contact-form'>
            <h2>Edit Contact</h2>
            <form onSubmit={submitHandler}>
                <div className='form-controls'>
                    <div className='form-control'>
                        <label>Name: </label>
                        <input type='text' name='name' value={updatedName} placeholder='enter name here'
                               onChange={nameChangeHandler}/>
                    </div>
                    <div className='form-control'>
                        <label>Email: </label>
                        <input type='email' name='email' value={updatedEmail} placeholder='enter email here'
                               onChange={emailChangeHandler}/>
                    </div>
                    <div className='form-control'>
                        <label>Address: </label>
                        <input type='address' name='address' value={updatedAddress} placeholder='enter address here'
                               onChange={addressChangeHandler}/>
                    </div>
                </div>
                <div className='btn-addContact'>
                    <button>Update Contact</button>
                </div>
            </form>
        </div>
    );
}

export default UpdateContact;