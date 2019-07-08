// login page
import React from "react";
import SignInBtn from "../components/SigninBtn";
import Footer from "../components/Footer";

export default function Login() {
    return (
        <div>
            <form id="signinForm">
                <input id="signinUName" name="username" placeholder="Username"/>
                <input id="signinPword" name="password" placeholder="Password"/>
                <SignInBtn />
            </form>
            <Footer />
        </div>
    );
}