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
        <div className="yourDescriptionWrapper">
            <div className="yourDescription slateWhite-text">
                {props.topDescription}
                <span className="yourWordBreak">{props.topDescriptionBreak}</span>
            </div>
            <div className="yourDescription slateWhite-text">
                {props.bottomDescription}
                <span className="yourWordBreak">
                    <span className={`highlighted ${props.highlightColor}`}>{props.highlighted}</span>
                </span>
            </div>
        </div>
    </div>
);

export default YourThing;