import React from 'react';
import ContactCard from "./ContactCard";
import './ContactList.css';
import {Link} from "react-router-dom";

function ContactList(props) {
    return (
        <div className='contact-list-header'>
            <h3><Link to='/formik_tut'>Formik Tutorial</Link></h3>
            <h3><Link to='/fakeShop'>Fake Shop</Link></h3>
            <h3><Link to='/react-table-tutorial'>React Table</Link></h3>
            <h3>Contact List</h3>
            <div className='contact-list'>
                <Link to='/add'>
                    <button>Add Contact</button>
                </Link>
                {props.contactList.map(contact => {
                    return (
                        <ContactCard key={contact.id} contact={contact} onDeleteContact={props.onDeleteContact}/>
                    )
                })}
            </div>
        </div>
    );
}

export default ContactList;