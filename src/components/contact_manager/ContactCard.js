import React from 'react';
import Card from "../UI/Card";
import './ContactCard.css';
import userLogo from '../../images/user-logo.png';
import {Link} from "react-router-dom";

function ContactCard(props) {

    const deleteContact = (contactId) => {
        props.onDeleteContact(contactId)
    }
    const editContact = () => {

    }
    return (
        <Card className='contact-card-item'>
            <img className='user-logo' src={userLogo} alt='usr logo'/>
            <div className='contact-item-description'>
                <Link to={{
                    pathname: `contact/${props.contact.id}`,
                    state: {contact: props.contact}
                }}>
                    <h2>{props.contact.name}</h2>
                    <h5>{props.contact.email}</h5>
                </Link>
            </div>
            <div className='contact-actions'>
                <Link to={{pathname: `/edit`, state: {contact: props.contact}}}>
                    <button>Edit</button>
                </Link>
                <button onClick={() => deleteContact(props.contact.id)}>Delete</button>
            </div>
        </Card>
        // <div>
        //     <div >
        //         <ul>
        //             <li>{props.contact.id}</li>
        //             <li>{props.contact.name}</li>
        //             <li>{props.contact.email}</li>
        //         </ul>
        //     </div>
        // </div>
    );
}

export default ContactCard;