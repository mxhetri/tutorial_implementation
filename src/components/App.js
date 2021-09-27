import './App.css';
import {useEffect, useState} from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import ContactList from "./contact_manager/contactList";
import AddContact from "./contact_manager/add_contact/AddContact";
import ContactDetails from "./contact_manager/ContactDetails";
import api from '../api/Contacts'
import UpdateContact from "./contact_manager/update_contact/UpdateContact";
import FakeShopApp from "./fake_shop/FakeShopApp";

function App() {
    const LOCAL_STORAGE_KEY = 'contacts';

    // retrieve contacts from api
    const retrieveContacts = async () => {
        const response = await api.get("/contacts");
        return response.data
    }
    const [contacts, setContacts] = useState([]);

    // save new contact data
    const saveContactData = async (newContactData) => {
        const request = {
            ...newContactData
        }
        const response = await api.post("/contacts", request);
        setContacts([...contacts, response.data])
    }

    // update contact
    const updateContactHandler = async (contact) => {
        const response = await api.put(`/contacts/${contact.id}`, contact);
        const {id, name, email, address} = response.data;
        setContacts(contacts.map(contact => {
            return contact.id === id ? {...response.data}: contact;
        }))
    }

    // delete data
    const deleteContactData = async (contactId) => {
        await api.delete(`/contacts/${contactId}`);
        setContacts(contacts.filter(contact => contact.id !== contactId));

    }

    useEffect(() => {
        const getAllContacts = async () => {
            const allContacts = await retrieveContacts();
            if (allContacts) setContacts(allContacts);
        }
        getAllContacts();
    }, [])
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
            <Router>
                {/*Navigation bar for main page */}
                {/*<div className='header-container'>*/}
                {/*    <Navbar/>*/}
                {/*    <Switch>*/}
                {/*        <Route path='/' exact component={Home}/>*/}
                {/*        <Route path='/features' component={KeyFeature}/>*/}
                {/*        <Route path='/pricing' component={Pricing}/>*/}
                {/*        <Route path='/testimonials' component={Testimonails}/>*/}
                {/*        <Route path='/demo' component={Demo}/>*/}
                {/*    </Switch>*/}
                {/*</div>*/}
                {/*<Route path='/fakeShop' component={FakeShopApp} exact/>*/}
              <FakeShopApp/>
                <Switch>

                    <Route path='/' exact render={(props) => (
                        <ContactList {...props} contactList={contacts}
                                     onAddContact={saveContactData} onDeleteContact={deleteContactData}/>
                    )}/>
                    <Route path='/add' render={(props) => (
                        <AddContact {...props} onAddContact={saveContactData}/>
                    )}/>
                    <Route path='/edit' render={(props) => (
                        <UpdateContact {...props} onUpdateContact={updateContactHandler}/>
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
