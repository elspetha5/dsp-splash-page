import React from "react";
import "./slantTop.css";

const SlantTop = props => {
    return (
        <div>
            <div className={`slantTop slateWhite-text ${props.color}`}>
                <div className="topSlantTitle">{props.title}</div>
            </div>
            <div id="topSlant" className={props.color}></div>
        </div>
    )
};

export default SlantTop;