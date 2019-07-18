// my trips page (saved trips)
import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import MyTripsPost from "../components/myTripsPost";

export default function MyTrips() {
    return (
        <div>
            <Header />
            <Navbar />
            <MyTripsPost />
        </div>
    );
}