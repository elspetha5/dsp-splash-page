import React from "react";

import "./slantinfo.css";

const SlantDown = props => {
    return (
        <div className={`slantDown ${props.background}`}>
            <div className="unSkewDown">
                <div className={`${props.titleColor} slantTitle`}>{props.title}</div>
                <div className="slantInfoWrapper">
                    {props.children}
                </div>
            </div>
        </div>
    )
};

export default SlantDown;