// login page
import React, { Component } from "react";
import SignInBtn from "../components/SigninBtn";
import Footer from "../components/Footer";
// import db from "../../../models/index";
// import User from "../../../models/user";
import API from "../utils/API";

class Login extends Component {
    state = {
        username: "",
        pword: ""
    };
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    handleFormSubmit = event => {
        event.preventDefault();
        // this.searchGiphy(this.state.search);
        // function checking if username exists already - if does prompts for new entry, if not creates new user
        // db.Users.findOne({username:this.state.username}).then(name=>{
        //     if(name === 0) {
        //         db.User.create({username: this.state.username, password: this.state.password});
        //         console.log("Username: "+this.state.username+" Password: "+this.state.password);
        //     } else {
        //         this.setState({username:"", password:""});
        //         alert("This username is already taken. Please choose a different one.");
        //         console.log("Username: "+this.state.username+" Password: "+this.state.password);
        //     }
        // });
        API.test().then(response=>response.json(response)).catch(err=>console.log(err));
        console.log("Login form");
    };
    render() {
        return (
            <div>
                <form id="signinForm">
                    <input id="signinUName" name="username" placeholder="Username" />
                    <input id="signinPword" name="password" placeholder="Password" />
                    <SignInBtn onClick={this.handleFormSubmit}/>
                </form>
                <Footer />
            </div>
        );
    }
}

export default Login;