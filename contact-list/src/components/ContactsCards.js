import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";

const ContactsCards = (props) => {
  const { id, name, email } = props.contact;
  console.log("props.contacts=>", props.contact);
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link
          to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="large trash alternate outline icon right floated "
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};

export default ContactsCards;
