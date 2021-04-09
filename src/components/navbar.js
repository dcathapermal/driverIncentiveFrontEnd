import React, { useState } from "react";
import "../styles/navbar.css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Navbar(props) {
/*
  state = {
    text: "name"
  }*/
  const history = useHistory();
  function handleSubmit(event) {
    history.push("/settings");
  }


  function logout(event) {
    event.preventDefault();
   // props.djangoService.logout();
      history.push("/login");
  }


  return (
    <div>
      <header>
        <Button onClick={handleSubmit}>name</Button>
        <Button
              onClick={logout}
              block
              type="submit"
              id="logout"
              value="logout"
            >
              logout
            </Button>
      </header>
      <ul id="nav">
        <li id="one"><a href="/home">Points</a></li>
        <li id="two"><a href="/catalog">Catalog</a></li>
        <li id="three"><a href="/orders">Purchases</a></li>
      </ul>
    </div>
  );
}
