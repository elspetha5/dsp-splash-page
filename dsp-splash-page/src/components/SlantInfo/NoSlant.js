import React from "react";

import "./css/slantinfo.css";
import "./css/mediaSlantinfo.css";

const NoSlant = props => {
    return (
        <div>
            <div className="slantTitle almostBlack-text">{props.title}</div>
            <div className="slantInfoWrapper almostBlack-text">
                {props.children}
            </div>
        </div>
    )
};

export default NoSlant;