import './App.css';
import AddContact from "./components/contact_manager/add_contact/AddContact";
import ContactList from "./components/contact_manager/contactList";
import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ContactDetails from "./components/contact_manager/ContactDetails";

function App() {
    const LOCAL_STORAGE_KEY = 'contacts';


    const [contacts, setContacts] = useState([]);
    const saveContactData = (newContactData) => {
        setContacts([...contacts, newContactData])
    }
    const deleteContactData = (contactId) => {
        setContacts(contacts.filter(contact => contact.id !== contactId))
    }

    // store data into local storage  -its not working atm
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts || []));
    }, [contacts])

    // retrieve data from local storage -its not working atm
    useEffect(() => {
        const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        console.log('retrieve data', retrieveContacts)
        if (retrieveContacts) setContacts(retrieveContacts)
    }, [])


    return (
        <div>
            <h1> Contact Manager</h1>
            <Router>
                {/*<Header/>*/}
                <Switch>
                    <Route path='/' exact render={(props) => (
                        <ContactList {...props} contactList={contacts}
                                     onAddContact={saveContactData} onDeleteContact={deleteContactData}/>
                    )}/>
                    <Route path='/add' render={(props) => (
                        <AddContact {...props} onAddContact={saveContactData}/>
                    )}/>
                    <Route path="/contact/:id" render={(props) => (
                        <ContactDetails {...props} onDeleteContact={deleteContactData}/>
                    )}/>
                </Switch>
                {/*<AddContact onAddContact={saveContactData}/>*/}
                {/*<ContactList contactList={contacts}*/}
                {/*             onDeleteContact={deleteContactData}/>*/}
            </Router>
        </div>

    );
}

export default App;
