import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import TripData from "../components/TripData";

export default function CreateTrip() {
    return (
        <div>
            <Header />
            <Navbar />
            <div id="createTripWrapper">
                <div id="createInnerWrapper">
                    <TripData />
                </div>
            </div>
        </div>
    );
}