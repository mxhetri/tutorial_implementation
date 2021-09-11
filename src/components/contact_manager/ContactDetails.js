import React, {useState} from 'react';
import './ContactDetails.css';
import {Link} from "react-router-dom";
import userImg from '../../images/user-logo.png';
import DeleteModal from "./delete_contact/DeleteModal";

function ContactDetails(props) {

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const toggleDeleteModal = () => {
        setShowDeleteModal(prev => !prev);
    }
    const {id, name, email, address} = props.location.state.contact;
    console.log('user id', id)
    return (
        <div className='detail-view'>
            <div>
                <Link to='/'>
                    <button>Back to contact List</button>
                </Link>
            </div>
            <div className='user-detail'>
                <img src={userImg} alt='pic'/>
                <div className='user-name'>
                    {name}
                </div>
                <div className='user-description'>
                    {email} <span/>{address}
                </div>
                <div className='user-actions'>
                    <button onClick={toggleDeleteModal}>Delete User</button>
                    {showDeleteModal && <DeleteModal userId={id} deleteContact={props.onDeleteContact} onDeleteModal={toggleDeleteModal}/>}
                    <button>Update User</button>
                </div>


            </div>
        </div>
    );
}

export default ContactDetails;