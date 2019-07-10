//sign up page
import React, {Component} from "react";
import SignUpBtn from "../components/SignupBtn";
import TopInterests from "../components/TopInterests";
import OtherInterests from "../components/OtherInterests";
import API from "../utils/API";


class SignUp extends Component {
    state = {
        username: "",
        password: ""
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    handleFormSubmit = event => {
        event.preventDefault();
        // function checking if username exists already - if does prompts for new entry, if not creates new user
        API.getUsers()
            .then(function(req,res) {
                console.log(req);
                console.log(res);
            }).catch(res=>res.JSON({Error: "This username is already taken."}));
        // db.Users.findOne({username:this.state.username}).then(name=>{
        //     if(name === 0) {
        //         db.User.create({username: this.state.username, password: this.state.password});
        //         console.log("Username: "+this.state.username+" Password: "+this.state.password);
        //     } else {
        //         this.setState({username:"", password:""});
        //         // alert("This username is already taken. Please choose a different one.");
        //         console.log("Username: "+this.state.username+" Password: "+this.state.password);
        //         //res.JSON({Error: "This username is already taken"});
        //     }
        // });
        // console.log("New user created");
    };

    render() {
    return (
        <div>
            <form id="signupForm">
                <input id="signupUName" type="text" name="username" placeholder="Username" onChange={this.handleInputChange} />
                <input id="signupPword" type="text" name="password" placeholder="Password" onChange={this.handleInputChange} />
                <TopInterests />
                <TopInterests />
                <TopInterests />
                <OtherInterests />
                <SignUpBtn onClick={this.handleFormSubmit}/>
            </form>
        </div>
    );
    }
}

export default SignUp;