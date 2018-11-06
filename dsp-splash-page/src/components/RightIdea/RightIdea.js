import React from "react";
import "./rightidea.css";

const RightIdea = props => (
    <div className="ideaBackground">
        <div className="leftVerbiage">{props.verbiage}</div>
        <div className="rightIdea">{props.idea}</div>
    </div>
);

export default RightIdea;