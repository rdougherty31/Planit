import React, { Component } from "react";
import "./style.css";

class TopInterests extends Component {
    state = {
        outdoors: "",
        nature: "",
        histSites: "",
        food: "",
        museums: "",
        fineArts: "",
        music: "",
        festivals: "",
        nightlife: "",
        locals: "",
        anything: ""
    };
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    render() {
        return (
            <select id="topInterests" name="interest" value={this.state.value}>
                <option name="outdoors" value="outdoors">Outdoor Adventures</option>
                <option name="nature" value="nature">Nature</option>
                <option name="histSites" value="histSites">Historical Sites</option>
                <option name="food" value="food">Local Food</option>
                <option name="museums" value="museums">Museums</option>
                <option name="fineArts" value="fineArts">Fine Arts</option>
                <option name="music" value="music">Live Music</option>
                <option name="festivals" value="festivals">Festivals</option>
                <option name="nightlife" value="nightlife">Night Life</option>
                <option name="locals" value="locals">Meeting Locals</option>
                <option name="anything" value="anything">Up For Anything!</option>
            </select>
        );
    }
}
export default TopInterests;