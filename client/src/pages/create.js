import React, { Component } from "react";
import Cookies from "js-cookie";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PlanitBtn from "../components/PlanitBtn";
import API from "../utils/API";

class CreateTrip extends Component {
    state = {
        destCity: "",
        destCountry: "",
        startMonth: "",
        startDay: "",
        startYear: "",
        endMonth: "",
        endDay: "",
        endYear: "",
        cookieUsername: JSON.parse(atob(Cookies.get("session"))).username,
        cookieID: JSON.parse(atob(Cookies.get("session"))).id
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        let city = this.state.destCity;
        let country = this.state.destCountry;
        if (city.length < 1|| country.length < 1) {
            return alert("You must enter a city and a country.");
        }
        API.createPost({
            country: this.state.destCountry,
            city: this.state.destCity,
            startMonth: this.state.startMonth,
            startDay: this.state.startDay,
            startYear: this.state.startYear,
            endMonth: this.state.endMonth,
            endDay: this.state.endDay,
            endYear: this.state.endYear,
            creator: JSON.parse(atob(Cookies.get("session"))).username
        })
            .then(response => {
                console.log("Trip to " + this.state.destCity + ", " + this.state.destCountry + " has been created.")
                alert("Your trip to "+this.state.destCity+" has been created!");
                this.setState({
                    destCity: "",
                    destCountry: "",
                    startMonth: "",
                    startDay: "",
                    startYear: "",
                    endMonth: "",
                    endDay: "",
                    endYear: ""
                });
            }).catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Header />
                <Navbar />
                <div id="createTripWrapper">
                    <div id="createInnerWrapper">
                        <form className="tripData">
                            <div id="createDest">Destination</div>
                            <input id="destCity" type="text" name="destCity" placeholder="City" onChange={this.handleInputChange} />
                            <input id="destCountry" type="text" name="destCountry" placeholder="Country" onChange={this.handleInputChange} />
                            <div id="startDate">Start Date</div>
                            <select id="startMonth" type="text" name="startMonth" onChange={this.handleInputChange} >
                                <option name="jan" value="01">January</option>
                                <option name="feb" value="02">February</option>
                                <option name="march" value="03">March</option>
                                <option name="apr" value="04">April</option>
                                <option name="may" value="05">May</option>
                                <option name="june" value="06">June</option>
                                <option name="july" value="07">July</option>
                                <option name="aug" value="08">August</option>
                                <option name="sept" value="09">September</option>
                                <option name="oct" value="10">October</option>
                                <option name="nov" value="11">November</option>
                                <option name="dec" value="12">December</option>
                            </select>
                            <select id="startDay" type="text" name="startDay" onChange={this.handleInputChange} >
                                <option name="01" value="01">01</option>
                                <option name="02" value="02">02</option>
                                <option name="03" value="03">03</option>
                                <option name="04" value="04">04</option>
                                <option name="05" value="05">05</option>
                                <option name="06" value="06">06</option>
                                <option name="07" value="07">07</option>
                                <option name="08" value="08">08</option>
                                <option name="09" value="09">09</option>
                                <option name="10" value="10">10</option>
                                <option name="11" value="11">11</option>
                                <option name="12" value="12">12</option>
                                <option name="13" value="13">13</option>
                                <option name="14" value="14">14</option>
                                <option name="15" value="15">15</option>
                                <option name="16" value="16">16</option>
                                <option name="17" value="17">17</option>
                                <option name="18" value="18">18</option>
                                <option name="19" value="19">19</option>
                                <option name="20" value="20">20</option>
                                <option name="21" value="21">21</option>
                                <option name="22" value="22">22</option>
                                <option name="23" value="23">23</option>
                                <option name="24" value="24">24</option>
                                <option name="25" value="25">25</option>
                                <option name="26" value="26">26</option>
                                <option name="27" value="27">27</option>
                                <option name="28" value="28">28</option>
                                <option name="29" value="29">29</option>
                                <option name="30" value="30">30</option>
                                <option name="31" value="31">31</option>
                            </select>
                            <select id="startYear" type="text" name="startYear" onChange={this.handleInputChange}>
                                <option name="2019" value="19" defaultValue>2019</option>
                                <option name="2020" value="20">2020</option>
                                <option name="2021" value="21">2021</option>
                                <option name="2022" value="22">2022</option>
                                <option name="2023" value="23">2023</option>
                            </select>
                            <div id="endDate">End Date</div>
                            <select id="endMonth" type="text" name="endMonth" onChange={this.handleInputChange}>
                                <option name="jan" value="01">January</option>
                                <option name="feb" value="02">February</option>
                                <option name="march" value="03">March</option>
                                <option name="apr" value="04">April</option>
                                <option name="may" value="05">May</option>
                                <option name="june" value="06">June</option>
                                <option name="july" value="07">July</option>
                                <option name="aug" value="08">August</option>
                                <option name="sept" value="09">September</option>
                                <option name="oct" value="10">October</option>
                                <option name="nov" value="11">November</option>
                                <option name="dec" value="12">December</option>
                            </select>
                            <select id="endDay" type="text" name="endDay" onChange={this.handleInputChange}>
                                <option name="01" value="01">01</option>
                                <option name="02" value="02">02</option>
                                <option name="03" value="03">03</option>
                                <option name="04" value="04">04</option>
                                <option name="05" value="05">05</option>
                                <option name="06" value="06">06</option>
                                <option name="07" value="07">07</option>
                                <option name="08" value="08">08</option>
                                <option name="09" value="09">09</option>
                                <option name="10" value="10">10</option>
                                <option name="11" value="11">11</option>
                                <option name="12" value="12">12</option>
                                <option name="13" value="13">13</option>
                                <option name="14" value="14">14</option>
                                <option name="15" value="15">15</option>
                                <option name="16" value="16">16</option>
                                <option name="17" value="17">17</option>
                                <option name="18" value="18">18</option>
                                <option name="19" value="19">19</option>
                                <option name="20" value="20">20</option>
                                <option name="21" value="21">21</option>
                                <option name="22" value="22">22</option>
                                <option name="23" value="23">23</option>
                                <option name="24" value="24">24</option>
                                <option name="25" value="25">25</option>
                                <option name="26" value="26">26</option>
                                <option name="27" value="27">27</option>
                                <option name="28" value="28">28</option>
                                <option name="29" value="29">29</option>
                                <option name="30" value="30">30</option>
                                <option name="31" value="31">31</option>
                            </select>
                            <select id="endYear" type="text" name="endYear" onChange={this.handleInputChange}>
                                <option name="2019" value="19" defaultValue>2019</option>
                                <option name="2020" value="20">2020</option>
                                <option name="2021" value="21">2021</option>
                                <option name="2022" value="22">2022</option>
                                <option name="2023" value="23">2023</option>
                            </select>
                            <PlanitBtn onClick={this.handleFormSubmit} />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default CreateTrip;