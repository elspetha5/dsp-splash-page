import React from "react";
import "./rightidea.css";

const RightIdea = props => (
    <div className="ideaBackground">
        <div className="leftVerbiage half">{props.verbiage}</div>
        <div className="rightIdea half">{props.idea}</div>
    </div>
);

export default RightIdea;