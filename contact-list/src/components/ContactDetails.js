import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";

const ContactDetails = (props) => {
  console.log("props=>", props);
  const location = useLocation();
  console.log("location=>", location);
  const param = useParams();
  console.log("params=>", param);
  const state = location.state;
  console.log(state);
  //   const { name } = state;
  //   console.log(from);
  return (
    <>
      <div className="ui centered card">
        <div className="ui center aligned content">
          <div className="ui small  image">
            <img src="https://picsum.photos/200/300/?random&cb=" alt="Random" />
          </div>
          <div className="content">
            <h2 className="header">brijendra</h2>
            <div className="meta">
              <span className="date">Joined in 2013</span>
            </div>
            <div className="description">
              brijendra is an art director living in New York.
            </div>
          </div>
          <div className="extra content">
            <h4>
              <i className="user icon"></i>
              22 Friends
            </h4>
          </div>
        </div>
      </div>
      <div className="ui  ">
        <Link to={"/"}>
          <button
            className="ui button green right floated"
            style={{ marginRight: "34em" }}
          >
            Back to Contact List
          </button>
        </Link>
      </div>
    </>
  );
};

export default ContactDetails;
