import React, { Component } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import TopInterests from "../components/TopInterests";

class Search extends Component {
    state = {
        destCity: "",
        destCountry: "",
        destStart: "",
        destEnd: "",
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
            <div>
                <Header />
                <Navbar />
                <div className="searchWrapper">
                    <TopInterests onChange={this.handleInputChange} />
                    <TopInterests onChange={this.handleInputChange} />
                    <TopInterests onChange={this.handleInputChange} />
                </div>
            </div>
        );
    }
}

export default Search;