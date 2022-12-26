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
      <input
        type="text"
        // value={this.state.textVal}
        // autoFocus="autoFocus"
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="text"
        // value={this.state.textVal}
        // autoFocus="autoFocus"
        onChange={(event) => setPlainPassword(event.target.value)}
      />
      <input
        type="text"
        // value={this.state.textVal}
        // autoFocus="autoFocus"
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={signUpUser}>Sign Up</button>
    </div>

    // <Container id="main-container">
    //   <Form>
    //     <h1 className="SignIn"> Create a profile. </h1>
    //     <Form.Group controlId="email">
    //       <Form.Control
    //         type="email"
    //         size="lg"
    //         placeholder="Email address"
    //         autoComplete="username"
    //         className="position-relative"
    //       />
    //     </Form.Group>
    //     <Form.Group controlId="password">
    //       <Form.Control
    //         type="password"
    //         size="lg"
    //         placeholder="Password"
    //         autoComplete="current-password"
    //         className="position-relative"
    //       />
    //     </Form.Group>

    //     <div controlId="sign-up-Button">
    //       <Button type="submit" className="create" variant="primary" size="lg">
    //         {" "}
    //         Create account{" "}
    //       </Button>
    //     </div>
    //   </Form>
    // </Container>
  );
}

export default CreateProfile;
