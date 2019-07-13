import React from "react";
import "./style.css";

export default function OtherInterests(props) {
    return (
        <div id="otherInterests">
            <input type="radio" name="outdoors" className="interests" {...props}></input>
            <label htmlFor="outdoors">Outdoor Adventures</label><br></br>
            <input type="radio" name="nature" className="interests" {...props}></input>
            <label htmlFor="nature">Nature</label><br></br>
            <input type="radio" name="histSites" className="interests" {...props}></input>
            <label htmlFor="histSites">Historical Sites</label><br></br>
            <input type="radio" name="food" className="interests" {...props}></input>
            <label htmlFor="food">Local Food</label><br></br>
            <input type="radio" name="museums" className="interests" {...props}></input>
            <label htmlFor="museums">Museums</label><br></br>
            <input type="radio" name="fineArts" className="interests" {...props}></input>
            <label htmlFor="fineArts">Fine Arts</label><br></br>
            <input type="radio" name="music" className="interests" {...props}></input>
            <label htmlFor="music">Live Music</label><br></br>
            <input type="radio" name="festivals" className="interests" {...props}></input>
            <label htmlFor="festivals">Festivals</label><br></br>
            <input type="radio" name="nightlife" className="interests" {...props}></input>
            <label htmlFor="nightlife">Night Life</label><br></br>
            <input type="radio" name="locals" className="interests" {...props}></input>
            <label htmlFor="locals">Meeting Locals</label><br></br>
            <input type="radio" name="any" className="interests" {...props}></input>
            <label htmlFor="anything">Up For Anything!</label><br></br>
        </div>
    );
}