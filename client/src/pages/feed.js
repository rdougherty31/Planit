// feed of trips page
import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import Footer from "../components/Footer";
import "./style.css";

export default function Feed() {
    return (
        <div id="mainContainer">
            <Header />
            <Navbar />
            <Post />
            <Footer />
        </div>
    );
}
