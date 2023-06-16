import React from "react";
import ContactsCards from "./ContactsCards";
import { Link } from "react-router-dom";

const ContactsList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactsCards
        key={contact.id}
        contact={contact}
        clickHander={deleteContactHandler}
      />
    );
  });

  return (
    <div className="main">
      <h2>
        Contact List
        <Link to={"/add"}>
          <button className="ui right floated button blue ">Add Contact</button>
        </Link>
      </h2>
      <br />
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactsList;
