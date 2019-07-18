// login page
import React, { Component } from "react";
// import { BrowserRouter } from "react-router-dom";
import { Redirect } from "react-router";
import Cookies from "js-cookie";
import SignInBtn from "../components/SigninBtn";
import Footer from "../components/Footer";
// import db from "../../../models/index";
// import User from "../../../models/user";
import API from "../utils/API";

class Login extends Component {
    state = {
        username: "",
        pword: "",
        redirect: false,
        cookieUsername: "",
        cookieID: ""
    };

    handleInputChange = async event => {
        const name = event.target.name;
        const value = event.target.value;
        await this.setState({
            [name]: value
        });
        console.log(this.state);
    }
    handleFormSubmit = event => {
        event.preventDefault();
        console.log("handleformsubmit fxn");
        API.getOneUser(this.state.username)
        .then(response=>{
            console.log("Response JSON");
            console.log(response);
            // *******************************************
            // check username bug
            if (!response) {
                console.log("User does not exist");
                alert("This username does not exist.");
                this.setState({
                    username: "",
                    pword: "",
                    redirect: false,
                    cookieUsername: "",
                    cookieID: ""
                });
                console.log("State after 1st if "+this.state);
            } else
            {
                console.log("User exists");
                console.log("Response.data.password = "+response.data.pword);
                if (response.data.pword !== this.state.pword) {
                    console.log("Incorrect Password");
                    alert("Invalid username or password");
                    this.setState({
                        username: "",
                        pword: "",
                        redirect: false,
                        cookieUsername: "",
                        cookieID: ""
                    });
                    console.log("State after 2nd if "+this.state);
                } else {
                    console.log("Login Success");
                    this.setState({
                        redirect: true,
                        cookieUsername: JSON.parse(atob(Cookies.get("session"))).username,
                        cookieID: JSON.parse(atob(Cookies.get("session"))).id
                    });
                }
            }
            console.log("response JSON end");
        })
        .catch(err=>{
            // console.log(err);
            alert("Invalid login.");
        });
        console.log("Login form");
    };
    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/feed" />;
        }
        return (
            <div>
                <form id="signinForm">
                    <input id="signinUName" type="text" name="username" placeholder="Username" onChange={this.handleInputChange} />
                    <input id="signinPword" type="password" name="pword" placeholder="Password" onChange={this.handleInputChange} />
                    <SignInBtn onClick={this.handleFormSubmit}></SignInBtn>
                </form>
                <Footer />
            </div>
        );
    }
}

export default Login;