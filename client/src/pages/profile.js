// profile page
import React, { Component } from "react";
import Cookies from "js-cookie";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

class Profile extends Component {
    state = {
        cookieUsername: JSON.parse(atob(Cookies.get("session"))).username,
        cookieID: JSON.parse(atob(Cookies.get("session"))).id
    };

    render() {
        return (
            <div>
                <Header />
                <Navbar />
                <div className="profileWrapper">
                    <div className="profileHeader">Hey, {this.state.cookieUsername}!</div>
                </div>
            </div>
        );
    }
}
export default Profile;