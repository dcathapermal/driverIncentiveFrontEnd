import React from "react";
import DjangoService from "./components/djangoService"

import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import Registration from "./components/Registration";
import {PointHistoryEntry} from "./components/Points"
import {PointHistory} from "./components/Points.js"
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Profile from "./components/profile";
import PurchaseTable from "./components/Purchase.js";
import {Catalog} from "./components/Catalog";
import { Nav } from "react-bootstrap";
import SponsorHome from "./components/sponsor/SponsorHome";
import AdminHome from "./components/admin/AdminHome";
  
const djangoService = new DjangoService () ;
const LoginContainer = () => {
  return(
    <div id="container">
      <Route path="/" exact component={() => <Login djangoService = {djangoService}/>} />
      <Route path="/login" exact component={() => <Login djangoService = {djangoService}/>} />
      <Route path="/registration" exact component={() => <Registration djangoService = {djangoService}/>} />
      <Footer />
    </div>
  );
}
const DefaultContainer = () => (
  <div> 
    <Navbar />
    <Route path="/driver/home" exact component={() => <PointHistory />} />
    <Route path="/driver/catalog" exact component={() => <Catalog />} />
    <Route path="/driver/orders" exact component={() => <PurchaseTable />} />
    <Route path="/sponsor" exact component={() => <SponsorHome/>}/>
    <Route path="/admin" exact component={() => <AdminHome/> } />
    <Footer />
  </div>
);
const ProfileContainer = () => (
  <div>
    <Navbar />
    <Route path="/driver/settings" exact component={() => <Profile />} />
   
  </div>
);

class App extends Component {
  render() {
    return (
      <div id="App">
        <Router>
          <Switch>
          <Route path="/" exact component={LoginContainer} />
            <Route path="/login" exact component={LoginContainer} />
            <Route path="/registration" exact component={LoginContainer} />
            <Route path="/driver/settings" exact component={ProfileContainer} />
            <Route component={DefaultContainer} />

          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
