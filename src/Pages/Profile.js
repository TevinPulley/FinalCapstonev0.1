import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import CreateProfile from "./CreateProfile";

function Profile() {
  return (
    <Container id="main-container">
      <Form>
        {/* <h1 className="SignIn"> Please sign in. </h1>
        <Form.Group controlId="email">
          <Form.Control
            type="email"
            size="lg"
            placeholder="Email address"
            autoComplete="username"
            className="position-relative"
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Control
            type="password"
            size="lg"
            placeholder="Password"
            autoComplete="current-password"
            className="position-relative"
          />
        </Form.Group>
        <Form.Group controlId="check">
          <Form.Check label="Remember me" />
        </Form.Group>
        <div controlId="sign-in-Button">
          <Button className="signin" variant="primary" size="lg">
            {" "}
            Sign in{" "}
          </Button>
        </div> */}
        <div>
          <h1 className="or">OR</h1>
          <CreateProfile />
        </div>
      </Form>
    </Container>
  );
}

export default Profile;
