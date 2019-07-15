//sign up page
import React, { Component } from "react";
import SignUpBtn from "../components/SignupBtn";
// import TopInterests from "../components/TopInterests";
// import OtherInterests from "../components/OtherInterests";
import API from "../utils/API";


class SignUp extends Component {
    state = {
        name: "",
        username: "",
        password: ""
    };
    componentDidMount() {
        console.log('yo');
        API.getUsers().then((res) => console.log(res));
        API.getPosts().then((res) => console.log(res));
    }

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
        let uNameExists = false;
        // function checking if username exists already - if does prompts for new entry, if not creates new user
        API.getUsers()
            .then(res => {
                console.log(uNameExists);
                // console.log(res.data[0].username);
                console.log(this.state.username);
                for (var i = 0; i < res.data.length; i++) {
                    if (res.data[i].username === this.state.username) {
                        uNameExists = true;
                    }
                }
                uNameExists ? console.log("this username already exists") : console.log("create new user");
                if (!uNameExists) {
                    console.log(this.state)
                    API.createUser({
                        name: this.state.name,
                        username: this.state.username,
                        pword: this.state.password
                    }).then(response => console.log(this.state.username+" created")).catch(error => console.log(error));
                }
                uNameExists ? alert("This username already exists. Please choose a different one.") : alert("Welcome, " + this.state.username + "!");
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <form id="signupForm">
                <input id="signupName" type="text" name="name" placeholder="Name" onChange={this.handleInputChange} />
                    <input id="signupUName" type="text" name="username" placeholder="Username" onChange={this.handleInputChange} />
                    <input id="signupPword" type="text" name="password" placeholder="Password" onChange={this.handleInputChange} />
                    <SignUpBtn onClick={this.handleFormSubmit} />
                </form>
            </div>
        );
    }
}

export default SignUp;