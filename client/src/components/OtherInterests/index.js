import React from "react";
import "./style.css";

export default function OtherInterests() {
    return (
        <div id="otherInterests">
            <input type="radio" name="outdoors" class="interests"></input>
            <label for="outdoors">Outdoor Adventures</label><br></br>
            <input type="radio" name="nature" class="interests"></input>
            <label for="nature">Nature</label><br></br>
            <input type="radio" name="histSites" class="interests"></input>
            <label for="histSites">Historical Sites</label><br></br>
            <input type="radio" name="food" class="interests"></input>
            <label for="food">Local Food</label><br></br>
            <input type="radio" name="museums" class="interests"></input>
            <label for="museums">Museums</label><br></br>
            <input type="radio" name="fineArts" class="interests"></input>
            <label for="fineArts">Fine Arts</label><br></br>
            <input type="radio" name="music" class="interests"></input>
            <label for="music">Live Music</label><br></br>
            <input type="radio" name="festivals" class="interests"></input>
            <label for="festivals">Festivals</label><br></br>
            <input type="radio" name="nightlife" class="interests"></input>
            <label for="nightlife">Night Life</label><br></br>
            <input type="radio" name="locals" class="interests"></input>
            <label for="locals">Meeting Locals</label><br></br>
        </div>
    );
}