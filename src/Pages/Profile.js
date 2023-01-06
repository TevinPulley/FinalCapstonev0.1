import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import CreateProfile from "./CreateProfile";
import SignIn from "./SignIn";

function Profile() {
  return (
    <Container id="main-container">
      {/* <Form>
        {" "}
        <div>
          <SignIn />
        </div>
      </Form> */}
      <Form>
        <div>
          <h1 className="or">Create Profile</h1>
          <CreateProfile />
        </div>
      </Form>
    </Container>
  );
}

export default Profile;
