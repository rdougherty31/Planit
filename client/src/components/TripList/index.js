import React from "react";
import "./style.css";

export function TripList({ children }) {
  return (
    <div className="tripList">
      <ul className="listHeader">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="listItems">{children}</li>;
}