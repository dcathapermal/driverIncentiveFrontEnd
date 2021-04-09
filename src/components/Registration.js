import "../styles/registration.css";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { Text } from "react-native";

import zxcvbn from "zxcvbn";

export default function Registration(props) {

  const [name, setName] = useState("");

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [myText, setMyText] = useState("");
  const minStrength = 3,thresholdLength = 7;
  const strengthLabels = ["Very Weak", "Weak", "Fair", "Strong", "Very Strong"];

  // this.minStrength =
  //   typeof minStrength === "number" ? Math.max(Math.min(minStrength, 4), 0) : 3;

  // set default thresholdLength to 7 if not a number or not specified
  // thresholdLength must be a minimum value of 7

  // this.thresholdLength =
  //   typeof thresholdLength === "number" ? Math.max(thresholdLength, 7) : 7;

  // initialize internal component state

  const setScore = (score) => {
    const meter = document.querySelector("#passwordmeter span");
    const msg = document.getElementById("passwordmessage");
    meter.style.width = (score + 1) * 25 + "px";

    //Set the color of the meter to
    // a) red if the score < 3
    // b) yellow if the score = 3
    // c) green if the score = 4
    //Change the text of the password message element accordingly.
    if (score < 2) {
      meter.style.backgroundColor = "red";
    } else if (score < 3) {
      meter.style.backgroundColor = "yellow";
    } else {
      meter.style.backgroundColor = "green";
    }
    msg.innerHTML = "<strong>" + strengthLabels[score] + "</strong> Password";
  };

  const validatePasswordStrong = (value) => {
    setPassword(value);
    setScore(zxcvbn(value).score);
    // ensure password is long enough
    // if (value.length <= this.thresholdLength) console.log("Password is short");

    // ensure password is strong enough using the zxcvbn library
    // if (zxcvbn(value).score < this.minStrength) console.log("Password is weak");
  };

  const history = useHistory();

  function validateForm() {
    return email.length > 0 && password.length > 0 && name.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.djangoService.create_user(name, email, password, cpassword);
    // props.setSignUp(false);
    history.push("/home");
  }


  function passwordCheck(props) {
    setcPassword(props);
    const pass = props;
    const pass1 = password;
    console.log(password);
    console.log(pass);
    if (pass === password) {
      setMyText("All Good!");
    } else {
      setMyText("Passwords don't match");
    }
  }
//onSubmit={handleSubmit} used to be in form}
  return (
    <div className="registration">
      <meta charSet="UTF-8" />
      <title>Register</title>
      <header></header>
      <div className="mainR">
        <title>Registration</title>
        <h1>Register for an account!</h1>
        <section>
          <form >
            <FormGroup controlId="name">
              <div>
                <FormLabel>name</FormLabel>
                <FormControl
                  autoFocus
                  type="text"
                  name="userid"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <i id="nameStatus" className="material-icons">
                  thumb_up
                </i>
              </div>
            </FormGroup>

            <FormGroup controlId="email">
              <div>
                <FormLabel>email</FormLabel>
                <FormControl
                  type="text"
                  name="email"
                  placeholder="email..."
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
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
                  placeholder="password..."
                  onChange={(e) => validatePasswordStrong(e.target.value)}
                />
              </div>
            </FormGroup>
            <div style={{ marginBottom: "15px" }}>
              <span id="passwordmeter">
                <span />
              </span>
              <span id="passwordmessage" aria-live="polite" />
            </div>
            <FormGroup controlId="Cpassword">
              <div>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl
                  type="password"
                  name="Cpassword"
                  value={cpassword}
                  onChange={(e) => passwordCheck(e.target.value)}
                />
                <br />
                <Text>{myText}</Text>
              </div>
            </FormGroup>
            <Button
              onClick={handleSubmit}
              disabled={!validateForm()}
              block
              type="submit"
              id="login"
              value="login"
            >
              Register
            </Button>
          </form>
        </section>
      </div>

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </div>
  );
}
