import React from "react";
import { Container, Form, Button } from "react-bootstrap";

function CreateProfile() {
  return (
    <Container id="main-container">
      <Form>
        <h1 className="SignIn"> Create a profile. </h1>
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

        <div controlId="sign-up-Button">
          <Button className="create" variant="primary" size="lg">
            {" "}
            Create account{" "}
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default CreateProfile;
