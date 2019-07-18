//no match page
import React from "react";

export default function NoMatch() {
    return (
        <div id="noMatchWrapper">
        <div id="noMatch">Uh oh! This page does not exist.</div>
        <a href="/" id="homeBtn">Home</a>
        </div>
    );
}