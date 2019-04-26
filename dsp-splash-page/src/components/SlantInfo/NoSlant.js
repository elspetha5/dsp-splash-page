import React from "react";

import "./slantinfo.css";

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