import React, { Component } from "react";

class TripData extends Component {
    state = {
        destCity: "",
        destCountry: "",
        destStart: "",
        destEnd: ""
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
        <form className="tripData">
            <input id="destCity" type="text" name="destCity" placeholder="Destination City" onChange={this.handleInputChange} />
            <input id="destCountry" type="text" name="destCountry" placeholder="Destination Country" onChange={this.handleInputChange} />
            <input id="destStart" type="text" name="destStart" placeholder="Start Date (MM/DD/YY)" onChange={this.handleInputChange} />
            <input id="destEnd" type="text" name="destEnd" placeholder="End Date (MM/DD/YY)" onChange={this.handleInputChange} />
        </form>
    );
    }
}

export default TripData;