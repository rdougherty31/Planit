// nav bar component
import React, { Component } from "react";
import { Redirect } from "react-router";
import Cookies from "js-cookie";
import './style.css';
import FeedBtn from "../FeedBtn";
import MyTripsBtn from "../MyTripsBtn";
import ProfileBtn from "../ProfileBtn";
import CreateTripBtn from "../CreateTripBtn";
// import SearchTripsBtn from "../SearchTripsBtn";
import LogoutBtn from "../LogoutBtn";
import Axios from "axios";

class Navbar extends Component {
  state = {
    cookieUsername: "",
    cookieID: "",
    redirect: false
  };

  logout = async (event) => {
    event.preventDefault();
    await Cookies.remove("session");
    await Cookies.remove("session.sig");
    this.setState({redirect: true});
    console.log("this.logout");
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }
  }
  render() {
    return (
      <div id="navbar">
        {this.renderRedirect()}
        {/* <li><img src="./globe_icon.png" alt="globe_image"></img></li> */}
        {/* <li id="menubtn">Menu</li> */}
        <a href="/feed"><FeedBtn /></a>
        <a href="/mytrips"><MyTripsBtn /></a>
        <a href="/profile"><ProfileBtn /></a>
        <a href="/createtrip"><CreateTripBtn /></a>
        {/* <a href="/searchtrips"><SearchTripsBtn /></a> */}
        <a href="/"><LogoutBtn onClick={this.logout} /></a>
      </div>
    );
  }
}
export default Navbar;