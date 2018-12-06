import React from "react";
import { Link } from "react-router-dom";
import "./yourThing.css";

const YourThing = props => (
    <div class="yourThingBackground">
        <div class="yourThingWrapper">
            <div class="yourTitleWrapper">
                <div class="yourThingWords">{props.topWords}</div>
                <div class="yourThingWords">{props.bottomWords}</div>
            </div>
            <div className="button"><Link to={props.link} className="yourButton" >{props.buttonWords}</Link></div>
            <div classname="yourDescriptionWrapper">
                <div class="yourTopDescription yourDescription">{props.topDescription}</div>
                <div class="yourBottomDescription yourDescription">{props.bottomDescription}</div>
            </div>
        </div>
    </div>
);

export default YourThing;