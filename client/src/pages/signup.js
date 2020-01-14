//sign up page
import React, { Component } from "react";
import { Redirect } from "react-router";
import SignUpBtn from "../components/SignupBtn"
import API from "../utils/API";

class SignUp extends Component {
    state = {
        name: "",
        username: "",
        password: "",
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
        API.getUsers()
            .then(response => {
                for (var i = 0; i < response.data.length; i++) {
                    if (this.state.username === response.data.length) {
                        alert("This username already exists.");
                        this.setState({
                            username: "",
                            pword: "",
                            redirect: false,
                            cookieUsername: "",
                            cookieID: ""
                        });
                        return console.log("Username already exists");
                    } else {
                        return API.createUser({
                            name: this.state.name,
                            username: this.state.username,
                            pword: this.state.password
                        }).then(response => {
                            this.setState({redirect: true});
                            alert(this.state.username + " has been created!");
                        }).catch(error => console.log(error));
                    }
                }
            })
            .catch(err => console.log(err));
    };

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/signin" />;
        }
        return (
            <div>
                <form id="signupForm">
                    <input id="signupName" type="text" name="name" placeholder="Name" onChange={this.handleInputChange} />
                    <input id="signupUName" type="text" name="username" placeholder="Username" onChange={this.handleInputChange} />
                    <input id="signupPword" type="password" name="password" placeholder="Password" onChange={this.handleInputChange} />
                    <SignUpBtn onClick={this.handleFormSubmit}></SignUpBtn>
                </form>
            </div>
        );
    }
}

export default SignUp;