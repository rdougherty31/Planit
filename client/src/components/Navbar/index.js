// nav bar component
import React from "react";
import './style.css';
import { FeedBtn, MyTripsBtn, ProfileBtn } from "../Buttons";

export default function Navbar() {
  return (
    <div id="navbar">
        {/* <li><img src="./globe_icon.png" alt="globe_image"></img></li> */}
        {/* <li id="menubtn">Menu</li> */}
        <a href="/"><FeedBtn /></a>
        <a href="/"><MyTripsBtn /></a>
        <a href="/"><ProfileBtn /></a>
    </div>
  );
}