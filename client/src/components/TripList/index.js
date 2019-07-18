// Trip List and List Item Components for Post Component and My Trips Post Component
import React from "react";

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