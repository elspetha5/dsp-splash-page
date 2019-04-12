import React from "react";
import "./leftidea.css";

const LeftIdea = props => (
    <div id={props.link} className="ideaBackground">
        <div className="leftIdea nightBlue-text">{props.idea}</div>
        <div className="rightVerbiage charcoalish-text">{props.verbiage}</div>
    </div>
);

export default LeftIdea;