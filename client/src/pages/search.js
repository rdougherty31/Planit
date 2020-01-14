import React, { Component } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import TopInterests from "../components/TopInterests";
import OtherInterests from "../components/OtherInterests";
import SearchTripsBtn from "../components/SearchTripsBtn";

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
                    <div className="searchLabel">Select your top interests when traveling:</div>
                    <TopInterests onChange={this.handleInputChange} />
                    <TopInterests onChange={this.handleInputChange} />
                    <TopInterests onChange={this.handleInputChange} />
                    <div className="searchLabel">Select any other interests:</div>
                    <OtherInterests onChange={this.handleInputChange} />
                    <SearchTripsBtn />
                </div>
            </div>
        );
    }
}

export default Search;