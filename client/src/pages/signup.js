//sign up page
import React, { Component } from "react";
// import { BrowserRouter } from "react-router-dom";
import { Redirect } from "react-router";
// import Cookies from "js-cookie";
import SignUpBtn from "../components/SignupBtn"
// import TopInterests from "../components/TopInterests";
// import OtherInterests from "../components/OtherInterests";
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
    componentDidMount = () => {
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
        // let uNameExists = false;
        // function checking if username exists already - if does prompts for new entry, if not creates new user
        // this.setState({
        //     cookieUsername: JSON.parse(atob(Cookies.get("session"))).username,
        //     cookieID: JSON.parse(atob(Cookies.get("session"))).id
        // });
        // API.getUsers()
        //     .then(res => {
        //         console.log(uNameExists);
        //         // console.log(res.data[0].username);
        //         console.log(this.state.username);
        //         this.setState({
        //             cookieUsername: JSON.parse(atob(Cookies.get("session"))).username,
        //             cookieID: JSON.parse(atob(Cookies.get("session"))).id
        //         });
        //         for (var i = 0; i < res.data.length; i++) {
        //             if (res.data[i].username === this.state.username) {
        //                 uNameExists = true;
        //             }
        //         }
        //         uNameExists ? console.log("this username already exists") : console.log("create new user");
        //         if (!uNameExists) {
        //             console.log(this.state)
        //             API.createUser({
        //                 name: this.state.name,
        //                 username: this.state.username,
        //                 pword: this.state.password
        //             }).then(response => {
        //                 console.log(this.state.username + " created")
        //             }).catch(error => console.log(error));
        //         }
        //         uNameExists ? alert("This username already exists. Please choose a different one.") : alert("Welcome, " + this.state.username + "!");
        //     })

        API.getUsers()
            .then(response => {
                console.log("Response JSON");
                console.log(response);
                let userExists = false;
                // *******************************************
                // check username bug
                for (var i = 0; i < response.data.length; i++) {
                    if (this.state.username === response.data.length) {
                        userExists = true;
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
                        console.log("User does not exist");
                        return API.createUser({
                            name: this.state.name,
                            username: this.state.username,
                            pword: this.state.password
                        }).then(response => {
                            this.setState({redirect: true});
                            console.log(this.state.username + " created")
                            alert(this.state.username + " has been created!");
                        }).catch(error => console.log(error));
                    }
                }
                console.log("response JSON end");
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