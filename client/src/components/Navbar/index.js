// nav bar component
import React from "react";
import './style.css';
import FeedBtn from "../FeedBtn";
import MyTripsBtn from "../MyTripsBtn";
import ProfileBtn from "../ProfileBtn";
import CreateTripBtn from "../CreateTripBtn";
import SearchTripsBtn from "../SearchTripsBtn";

export default function Navbar() {
  return (
    <div id="navbar">
        {/* <li><img src="./globe_icon.png" alt="globe_image"></img></li> */}
        {/* <li id="menubtn">Menu</li> */}
        <a href="/feed"><FeedBtn /></a>
        <a href="/mytrips"><MyTripsBtn /></a>
        <a href="/profile"><ProfileBtn /></a>
        <a href="/createtrip"><CreateTripBtn /></a>
        <a href="/searchtrips"><SearchTripsBtn /></a>
    </div>
  );
}