import React from "react";
import "./leftidea.css";

const LeftIdea = props => (
    <div id={props.link} className="ideaBackground">
        <div className="leftIdea">{props.idea}</div>
        <div className="rightVerbiage">{props.verbiage}</div>
    </div>
);

export default LeftIdea;