import React from 'react';
import './DeleteModal.css';
import {Link} from "react-router-dom";

function DeleteModal(props) {
    const deleteContact = () => {
        props.deleteContact(props.userId);
    }
    return (
        <div className='modal-background'>
            <div className='modal-container'>
                <div className='title-close-btn'>
                    <button onClick={props.onDeleteModal}>X</button>
                </div>
                <div className='modal-title'>
                    <h1>Are you sure you want to continue?</h1>
                </div>
                <div className='modal-body'>
                    <p>Please be sure before deleting your user</p>
                </div>
                <div className='modal-footer'>
                    <button onClick={props.onDeleteModal}>Cancel</button>
                    <Link to='/'>
                        <button onClick={deleteContact} className='btn-danger'>Delete User</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;