// post component
import React, { Component } from "react";
import './style.css';
import PlanitBtn from "../PlanitBtn";
import DeleteBtn from "../DeleteBtn";
import API from "../../utils/API";

class Post extends Component {
    state = {
        country: "US",
        city: "Miami",
        planned: false,
        people: "Kyle",
        startMonth: "01",
        startDay: "02",
        endMonth: "03",
        endDay: "04"  
    }

    planTrip() {
        return (
            this.setState({ planned: true })
        );
    }
    nextTrip() {
        API.getPosts((req,res)=>res.json(res)).then(response=>response.json(response)).catch(err=>console.log(err));
    }

    render() {
        return (
            <div className="postWrapper">
                <div className="innerWrapper">
                    <DeleteBtn />
                    <div className="postDest" >Destination: {this.state.city}, {this.state.country}</div>
                    <div className="postFriends">Friends: {this.state.people}</div>
                    <div className="postDates">Dates: {this.state.startMonth}/{this.state.startDay} - {this.state.endMonth}/{this.state.endDay}</div>
                    <PlanitBtn />
                    <button className="nextTripBtn" onClick={this.nextTrip}>Next Trip</button>
                </div>
            </div>
        );
    }
}

export default Post;