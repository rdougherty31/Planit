//general button
import React from "react";
import "./style.css";

// function SignInBtn() {
//     return (
//         <button className="generalBtn" id="signinBtn">Sign In</button>
//     );
// }
function SignUpBtn() {
    return (
        <button className="generalBtn" id="signupBtn">Sign Up</button>
    );
}
function CreateTripBtn() {
    return (
        <button className="generalBtn" id="createTripBtn">Create Trip</button>
    );
}
function FeedBtn() {
    return (
        <button className="generalBtn" id="feedBtn">All Trips</button>
    );
}
function MyTripsBtn() {
    return (
        <button className="generalBtn" id="mytripBtn">My Trips</button>
    );
}
function ProfileBtn() {
    return (
        <button className="generalBtn" id="profileBtn">Create Trip</button>
    );
}
export {SignUpBtn, CreateTripBtn, FeedBtn, MyTripsBtn, ProfileBtn};