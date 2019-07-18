// interest list component
import React from "react";

export function InterestList({ children }) {
  return (
    <div className="interestList">
      <ul className="intListHeader">{children}</ul>
    </div>
  );
}

export function IntListItem({ children }) {
  return <li className="intListItems">{children}</li>;
}