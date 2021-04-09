import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../styles/Login.css";
import AOT from "../images/AOT.jpg";
import { useHistory } from "react-router-dom";

export default function Login(props) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  function handleNew() {
    history.push("/registration");
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.djangoService.login(username, password).then((user_type) => {
      console.log(user_type['data']['user_type']);
      history.push("/"+  user_type['data']['user_type']);
    })
  }
  function handlePassword(event) {
    event.preventDefault();
    let type = props.djangoService.login(username, password);
    //props.djangoService.login(username, password).then((user_type) => {
    history.push("/"+  type);
  }

  return (
    <div className= "login">
      <meta charSet="UTF-8" />
      <title>Sign in to ...</title>
      <header>
        <a href="https://www.driverprogram.com" />
        <img className="logo" src={AOT} alt="Logo" />
        <h2 id="title">Driver Incentive</h2>
      </header>
      <div className="main">
        <h1>Already have an account?</h1>
        <section>
          <form >
            <FormGroup controlId="username">
              <div>
                <FormLabel>Username</FormLabel>
                <FormControl
                  autoFocus
                  type="text"
                  name="userid"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
            </FormGroup>
            <FormGroup controlId="password">
              <div>
                <FormLabel>Password</FormLabel>
                <FormControl
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </FormGroup>

            <Button
              onClick={handleSubmit}
              block
              type="submit"
              id="login"
              value="login"
            >
              Login
            </Button>
            <Button
              onClick={handlePassword}
              block
              type="button"
              id="reset"
              value="reset"
            >
              Forgot Password?
            </Button>
          </form>
        </section>
        <br />
        <br />
        <h1>First Time user?</h1>

        <Button onClick={handleNew} type="submit" id="login">
          Register today
        </Button>
      </div>

    </div>
  );
}
