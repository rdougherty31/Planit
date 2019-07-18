// login page
import React, { Component } from "react";
import { Redirect } from "react-router";
import Cookies from "js-cookie";
import SignInBtn from "../components/SigninBtn";
import Footer from "../components/Footer";
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
    }
    handleFormSubmit = event => {
        event.preventDefault();
        API.getOneUser(this.state.username)
        .then(response=>{
            if (!response) {
                alert("This username does not exist.");
                this.setState({
                    username: "",
                    pword: "",
                    redirect: false,
                    cookieUsername: "",
                    cookieID: ""
                });
            } else
            {
                if (response.data.pword !== this.state.pword) {
                    alert("Invalid username or password");
                    this.setState({
                        username: "",
                        pword: "",
                        redirect: false,
                        cookieUsername: "",
                        cookieID: ""
                    });
                } else {
                    this.setState({
                        redirect: true,
                        cookieUsername: JSON.parse(atob(Cookies.get("session"))).username,
                        cookieID: JSON.parse(atob(Cookies.get("session"))).id
                    });
                }
            }
        })
        .catch(err=>{
            alert("Invalid login.");
        });
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