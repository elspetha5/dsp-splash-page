import React from "react";
import "./leftidea.css";

const LeftIdea = props => (
    <div className="ideaBackground">
        <div className="leftIdea">{props.idea}</div>
        <div className="picWrapper">
            <img src={props.pic} className="leftPic" />
        </div>
        <div className="rightVerbiage">{props.verbiage}</div>
    </div>
);

export default LeftIdea;