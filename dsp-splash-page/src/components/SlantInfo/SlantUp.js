import React from "react";

import "./css/slantinfo.css";
import "./css/mediaSlantinfo.css";

const SlantUp = props => {
    return (
        <div className={`slantUp ${props.background}`}>
            <div className="unSkew">
                <div className={`${props.titleColor} slantTitle`}>{props.title}</div>
                <div className="slantInfoWrapper">
                    {props.children}
                </div>
            </div>
        </div>
    )
};

export default SlantUp;