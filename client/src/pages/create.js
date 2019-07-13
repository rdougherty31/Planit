import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import TripData from "../components/TripData";
import TopInterests from "../components/TopInterests";

export default function CreateTrip() {
    return (
        <div>
            <Header />
            <Navbar />
            <TripData />
            <TopInterests />
        </div>
    );
}