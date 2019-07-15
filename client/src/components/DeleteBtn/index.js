import React from "react";
import "./style.css";


export default function DeleteBtn(props) {
  return (
    <span className="deleteBtn" role="button" tabIndex="0" {...props}>
      ✗
      </span>
  );
}