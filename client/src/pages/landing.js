import React from "react";
import SignInBtn from "../components/SigninBtn";
import SignUpBtn from "../components/SignupBtn";
import "./style.css";

export default function Landing() {
    return (
        <div id="landingWrapper">
            <a href="/signin"><SignInBtn /></a>
            <a href="/signup"><SignUpBtn /></a>
        </div>
    );
}