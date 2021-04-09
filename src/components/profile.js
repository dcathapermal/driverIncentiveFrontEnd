import "../styles/profile.css";
import React, { Component, useState } from 'react'
import { useHistory } from "react-router-dom";

import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { Text, TextInput } from "react-native";
import zxcvbn from "zxcvbn";


export default function Profile () {

  const [name, setName] = useState("");
  const [License, setLicense] = useState("");
  const [email, setemail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [State, setState] = useState("");
  const[Sponsor,setSponsor]= useState("");
  const[disabled,isclicked]= useState("");
  



  
  const validatePasswordStrong = (value) => {
    setPassword(value);
    
    // ensure password is long enough
    // if (value.length <= this.thresholdLength) console.log("Password is short");

    // ensure password is strong enough using the zxcvbn library
    // if (zxcvbn(value).score < this.minStrength) console.log("Password is weak");
  };
  function validateForm() {
    return email.length > 0 && password.length > 0 && name.length > 0;
  }
  
  function handleSubmit(event) {
    event.preventDefault();
   // props.djangoService.create_user(name, email, password, cpassword);
  
   
  }

  function Apply(){
    if(document.getElementById("applyform").style.display == "block"){
      document.getElementById("applyform").style.display = "none";
    }
    else{
      document.getElementById("applyform").style.display = "block";
    }    

  }
  function Leave(){
       

  }
  function enable(event){
    
    var element = document.getElementById(event.target.value);
    if(element.hasAttribute("disabled")){
      element.removeAttribute("disabled");

    }
    else{
      element.setAttribute("disabled","false");
    }
    
    
    console.log(event.target.value);

  }

  function handleAddress() {
    if(document.getElementById("addressD").style.display == "block"){
      document.getElementById("addressD").style.display = "none";
    }
    else{
      document.getElementById("addressD").style.display = "block";
    }    
   // props.djangoService.create_user(name, email, password, cpassword);
  
   
  }
  function handleSubmitReset() {
    
    setName("name");
    setLicense("license");
    setemail("email");
    setAddress("address");
    setPassword("*******");
    setState("SC");
    setCity("Clemson");
    
   // props.djangoService.create_user(name, email, password, cpassword);
  
   
  }
  
  
    return (
      <div >
      <meta charSet="UTF-8" />
      <title>Profile</title>
      <div className="settings" >
        <title>Setting</title>
        
        <section>
        <h1>Settings</h1>
          <form id ="set" >
            <FormGroup >
              <div>
                <FormLabel>Full Name</FormLabel>
                </div>
                <div>
                <FormControl
                  autoFocus
                  type="text"
                  disabled = {true}
                  id ="nameT"
                  name="userid"
                  placeholder="Name" // change to current user name
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Button
                onClick={enable}
               
                block
                type="button"
                id="name"
                value="nameT"
              >
                Change
              </Button>

                
              </div>
            </FormGroup>
            <FormGroup controlId="License">
              <div>
                <FormLabel>License Plate</FormLabel>
              </div>
                <div>
                  <FormControl
                    autoFocus
                    type="text"
                    name="license"
                    disabled = {true}
                    placeholder="License Number" // change to current user name
                    value={License}
                    onChange={(e) => setLicense(e.target.value)}
                  />
                  <Button
                onClick={enable}
               
                block
                type="button"
                id="LicenseB"
                value="License"
              >
                Change
              </Button>

                
              </div>
            </FormGroup>

            <FormGroup controlId="email">
              <div>
                <FormLabel>email</FormLabel>
              </div>
              <div>
                <FormControl
                  type="text"
                  name="email"
                  disabled = {true}
                  placeholder="email..." // change to current user's email
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
                <Button
                onClick={enable}
               
                block
                type="button"
                id="emailB"
                value="email"
              >
                Change
              </Button>
              </div>
            </FormGroup>
            <FormGroup controlId="password">
              <div>
                <FormLabel>Password</FormLabel>
                </div>
                <div>
                <FormControl
                  type="password"
                  name="password"
                  disabled = {true}
                  value={password}
                  placeholder="********" change to current password
                  onChange={(e) => validatePasswordStrong(e.target.value)}
                />
                <Button
                onClick={enable}
               
                block
                type="button"
                id="passwordB"
                value="password"
              >
                Change
              </Button>
              </div>
            </FormGroup>
            <div>
              <Button
                onClick={handleAddress}
               
                block
                type="button"
                id="address"
                value="button"
              >
                Address
              </Button>
            </div>
            <div id = "addressD">
            <FormGroup controlId="Street">
              <div>
                <FormLabel>Street Address</FormLabel>
                <FormControl
                  autoFocus
                  type="text"
                  name="Add"
                  placeholder="Address" // change to current user name
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />

                
              </div>
            </FormGroup>
            <FormGroup controlId="City">
              <div>
                <FormLabel>City</FormLabel>
                <FormControl
                  autoFocus
                  type="text"
                  name="city"
                  placeholder="License Number" // change to current user name
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />

                
              </div>
            </FormGroup>

            <FormGroup controlId="State">
              <div>
                <FormLabel>State</FormLabel>
                <FormControl
                  type="text"
                  name="State"
                  placeholder="State" // change to current user's email
                  value={State}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
            </FormGroup>
            </div>
          </form>
         
          <div id="control">
              <ul id ="change">
                <li>
                  <Button
                  onClick={handleSubmitReset}
                  block
                  type="reset"
                  id="cancel"
                  value="Reset"
                  >
                    Cancel
                  </Button>
                </li>
                <li>
                  <Button
                  onClick={handleSubmit}
                disabled={!validateForm()}
                  block
                  type="submit"
                  id="save"
                  value="Submit"
                  >
                    Save
                  </Button>
                </li>
              </ul>
            </div>
            <div>
              <Button
                onClick={Apply}
               
                block
                type="button"
                id="apply"
                value="button"
              >
                Apply for sponsorship
              </Button>
            </div>
            <div id="applyform">
          <form>
          
          <FormGroup controlId="Sponsor">
           
              <div>
                <FormLabel>Select a Sponsor to apply for</FormLabel>
                </div>
                <div>
                <FormControl
                  as = "select" multiple
                  autoFocus
                  >
                 <option>1</option>
                 <option>2</option>
                 <option>3</option>
                 <option>4</option>
                 <option>5</option> 
                </FormControl>

                
              </div>
            </FormGroup>
           

          </form>
          </div>
          <div>
              <TextInput
                id ="sponsor"
                placeholder= "none"
                value = {Sponsor}/>
              <Button
                onClick={Leave}
               
                block
                type="button"
                id="Leave"
                value="leave"
              >
                leave sponsorship
              </Button>
          </div>
           
        </section>
      </div>

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </div>

    );
  }

