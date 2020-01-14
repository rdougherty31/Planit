// My Trips Post component
import React, { Component } from "react";
import DeleteBtn from "../DeleteBtn";
import { TripList, ListItem } from "../TripList";
import Cookies from "js-cookie";
import API from "../../utils/API";

class MyTripsPost extends Component {
    state = {
        post: [],
        country: "US",
        city: "Miami",
        planned: false,
        creator: "Kyle",
        startMonth: "01",
        startDay: "02",
        startYear: "20",
        endMonth: "03",
        endDay: "04",
        endYear: "20"
    }

    componentDidMount() {
        this.loadPosts();
    }

    loadPosts = () => {
        API.getMyTrips(JSON.parse(atob(Cookies.get("session"))).username)
            .then(res => {
                console.log(res)
                this.setState({
                    post: res.data,
                    country: "",
                    city: "",
                    planned: false,
                    creator: "",
                    startDate: "",
                    endDate: ""

                });
            }
            ).catch(err => console.log(err));
    };

    testClick = () => {
        alert("Added to your saved trips!");
    }
    removePost = event => {
        event.prevetDefault();

    }

    render() {
        return (
            <div className="postWrapper">
                <div className="innerWrapper">
                    {!this.state.planned ? (
                        <TripList>
                            {this.state.post.map(post => (
                                <ListItem key={post.id}>
                                    <div className="postDest">{post.city}, {post.country}</div>
                                    <div className="postFriends" key="travelers">Travelers: {post.creator}</div>
                                    <div className="postDates" key="dates">{post.startMonth}/{post.startDay}/{post.startYear} - {post.endMonth}/{post.endDay}/{post.endYear}</div>
                                    {/* <JoinBtn data-id={post.id} onClick={this.testClick} /> */}
                                    <DeleteBtn />
                                </ListItem>

                            ))}
                        </TripList>
                    ) : (
                            <h3>Planned Trip Passed</h3>
                        )}
                </div>
            </div>
        );
    }
}

export default MyTripsPost;