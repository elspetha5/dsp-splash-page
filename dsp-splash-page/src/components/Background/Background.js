import React from "react";
import "./background.css";

const Background = props => (
    <div id="background" className="slateWhite-background">{props.children}</div>
);

export default Background;