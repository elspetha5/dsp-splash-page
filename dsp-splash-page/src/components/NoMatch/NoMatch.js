import React from "react";
import { Link } from "react-router-dom";
import "./nomatch.css";

const NoMatch = () => (
    <div id="noMatch">
        Oops, this isn't a real dsp page... <Link to="/" id="takeMeHome" className="skyBlue-background slateWhite-text">take me home</Link>
    </div>
);

export default NoMatch;