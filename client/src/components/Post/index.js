// post component
import React, { Component } from "react";
import './style.css';
import PlanitBtn from "../PlanitBtn";
import DeleteBtn from "../DeleteBtn";

class Post extends Component {
    state = {
        country: "",
        city: "",
        planned: false,
        people: {}
    }

    planTrip() {
        return (
            this.setState({ planned: true })
        );
    }


    render() {
        return (
            <div className="postWrapper">
                {/* <div className="postImg"></div> */}
                <div className="innerWrapper">
                    <DeleteBtn />
                    <div className="postDest">Destination</div>
                    <div className="postFriends">Friends</div>
                    <div className="postDates">Dates</div>
                    <PlanitBtn />
                </div>
            </div>
        );
    }
}

export default Post;