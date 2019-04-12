import React from "react";
import { Link } from "react-router-dom";
import "./yourThing.css";

const YourThing = props => (
    <div className="yourThingBackground">
        <div className="yourTitleWrapper">
            <div className="yourThingWords slateWhite-text">{props.topWords}</div>
            <div className="yourThingWords slateWhite-text">{props.bottomWords}</div>
        </div>
        <div className="button"><Link to={props.link} className="yourButton" >{props.buttonWords}</Link></div>
        <div classname="yourDescriptionWrapper">
            <div className="yourTopDescription yourDescription slateWhite-text">{props.topDescription}</div>
            <div className="yourBottomDescription yourDescription slateWhite-text">{props.bottomDescription}</div>
        </div>
    </div>
);

export default YourThing;