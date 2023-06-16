import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContacts = (props) => {
  const [state, setState] = useState({ name: "", email: "" });
  const nevigate = useNavigate();

  const add = (e) => {
    e.preventDefault();
    if (state.name === "" || state.email === "") {
      alert("All the fields are mandatory !");
      return;
    }
    props.addContactsHandler(state);
    nevigate("/");
    // console.log(props);
    setState({ name: "", email: "" });
  };
  const onFormFieldChange = (e) => {
    // No need to return this function can be void
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form action="" className="ui form" onSubmit={add}>
        <div className="form">
          <div className="required field">
            <label>Name</label>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={state.name}
              onChange={onFormFieldChange}
            />
          </div>
          <div className="required field">
            <label>Email</label>
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={state.email}
              onChange={onFormFieldChange}
            />
          </div>
          <button className="positive ui button">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddContacts;

// import React from "react";

// class AddContact extends React.Component {
//   state = {
//     name: "",
//     email: "",
//   };

//   add = (e) => {
//     e.preventDefault();
//     if (this.state.name === "" || this.state.email === "") {
//       alert("ALl the fields are mandatory!");
//       return;
//     }
//     this.props.addContactHandler(this.state);
//     this.setState({ name: "", email: "" });
//   };
//   render() {
//     return (
//       <div className="ui main">
//         <h2>Add Contact</h2>
//         <form className="ui form" onSubmit={this.add}>
//           <div className="field">
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={this.state.name}
//               onChange={(e) => this.setState({ name: e.target.value })}
//             />
//           </div>
//           <div className="field">
//             <label>Email</label>
//             <input
//               type="text"
//               name="email"
//               placeholder="Email"
//               value={this.state.email}
//               onChange={(e) => this.setState({ email: e.target.value })}
//             />
//           </div>
//           <button className="ui button blue">Add</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default AddContact;
