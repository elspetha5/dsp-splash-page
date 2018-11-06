import React from "react";
import "./lefidea.css";

const LeftIdea = props => (
    <div className="ideaBackground">
        <div className="leftIdea">{props.idea}</div>
        <div className="rightVerbiage">{props.verbiage}</div>
    </div>
);

export default LeftIdea;