import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import AddContacts from "./AddContacts";
import ContactsList from "./ContactsList";
import ContactDetails from "./ContactDetails";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactsHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container  ">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ContactsList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            }
          />
          <Route
            path="/add"
            // exact
            element={<AddContacts addContactsHandler={addContactsHandler} />}
          />
          <Route path="/contact/:id" element={<ContactDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
