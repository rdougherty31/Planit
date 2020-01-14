// Post Component
import React, { Component } from "react";
import './style.css';
import JoinBtn from "../JoinBtn";
import { TripList, ListItem } from "../TripList";
import API from "../../utils/API";

class Post extends Component {
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
        // tripMates: ""
    }

    componentDidMount() {
        this.loadPosts();
    }

    loadPosts = () => {
        API.getPosts()
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
                    // tripMates: ""
                });
            }
            ).catch(err => console.log(err));
    };

    testClick = () => {
        alert("Added to your saved trips!");
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
                                    <div className="postFriends" key="travelers">Creator: {post.creator}</div>
                                    <div className="postDates" key="dates">{post.startMonth}/{post.startDay}/{post.startYear} - {post.endMonth}/{post.endDay}/{post.endYear}</div>
                                    {/* <div className="tripMates" key="tripMates">Other Travelers: {post.tripMates}</div> */}
                                    <JoinBtn data-id={post.id} onClick={this.testClick} />
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

export default Post;