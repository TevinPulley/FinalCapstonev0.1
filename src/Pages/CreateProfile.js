import "../Components/cssComponents/createProfile.css";
import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import CreateUser from "../services/userService";
import axios from "axios";

function CreateProfile() {
  const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   axios.post("http://localhost:3000/users").then((res) => {
  //     console.log(res);
  //     setUsers(res.data);
  //   });
  // }, []);

  const [email, setEmail] = useState("");
  const [plainPassword, setPlainPassword] = useState("");
  const [name, setName] = useState("");

  const signUpUser = () => {
    console.log(email, plainPassword, name);
    CreateUser(email, plainPassword, name);
  };

  return (
    <div>
      <div className="signUp">
        <input
          placeholder="Email@email.com"
          type="text"
          // value={this.state.textVal}
          // autoFocus="autoFocus"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          placeholder="Password"
          type="text"
          // value={this.state.textVal}
          // autoFocus="autoFocus"
          onChange={(event) => setPlainPassword(event.target.value)}
        />
        <input
          placeholder="Username"
          type="text"
          // value={this.state.textVal}
          // autoFocus="autoFocus"
          onChange={(event) => setName(event.target.value)}
        />
        <button className="signUpButton" onClick={signUpUser}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default CreateProfile;
