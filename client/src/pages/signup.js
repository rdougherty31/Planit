//sign up page
import React from "react";
import SignUpBtn from "../components/SignupBtn";
import TopInterests from "../components/TopInterests";
import OtherInterests from "../components/OtherInterests";

export default function SignUp() {
    return (
        <div>
            <form id="signupForm">
                <input id="signupUName" type="text" name="newUser" placeholder="Username" />
                <input id="signupPword" type="text" name="newPassword" placeholder="Password" />
                <TopInterests />
                <TopInterests />
                <TopInterests />
                <OtherInterests />
                <SignUpBtn />
            </form>
        </div>
    );
}