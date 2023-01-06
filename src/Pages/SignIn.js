import "../Components/cssComponents/createProfile.css";
import React, { useEffect, useState } from "react";
import loginOnServer from "../services/loginService";

var getUserFromServer = function () {
  return fetch("http://localhost:3000/me", {
    // return fetch('https://mtb-reviews.herokuapp.com/me', {
    credentials: "include",
  });
};

function getUser() {
  getUserFromServer().then((response) => {
    response.json().then((user) => {
      this.user = user;
    });
  });
}

function LoginUser() {
  loginOnServer(this.email, this.plainPassword).then((response) => {
    this.clearAuth();
    if (response.status === 201) {
      this.page = "loggedIn";
      this.showReviews();
      this.getUser();
      this.failedLoggin = "";
      this.loginDialog = false;
    } else {
      this.failedLoggin = "Incorrect user name or password";
    }
    if (this.state.hasError) {
      return console.log("error. something went wrong");
    }
  });

  const [email, setEmail] = useState("");
  const [plainPassword, setPlainPassword] = useState("");

  const loginUser = () => {
    console.log(email, plainPassword);
    loginOnServer(email, plainPassword);
  };

  return (
    <div className="logIn">
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

      <button className="loginButton" onClick={LoginUser}>
        Sign in
      </button>
    </div>
  );
}

export default LoginUser;
