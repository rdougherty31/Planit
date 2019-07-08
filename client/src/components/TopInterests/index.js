import React from "react";
import "./style.css";

export default function TopInterests() {
    return (
        <select name="TopInterests" id="topInterests">
            <option name="outdoors">Outdoor Adventures</option>
            <option name="nature">Nature</option>
            <option name="histSites">Historical Sites</option>
            <option name="food">Local Food</option>
            <option name="museums">Museums</option>
            <option name="fineArts">Fine Arts</option>
            <option name="music">Live Music</option>
            <option name="festivals">Festivals</option>
            <option name="nightlife">Night Life</option>
            <option name="locals">Meeting Locals</option>
        </select>
    );
}