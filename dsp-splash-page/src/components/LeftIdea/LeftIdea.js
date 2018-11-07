import React from "react";
import "./leftidea.css";

const LeftIdea = props => (
    <div className="ideaBackground">
        <div className="leftIdea one">{props.idea}</div>
        <div className="rightVerbiage two">{props.verbiage}</div>
    </div>
);

export default LeftIdea;