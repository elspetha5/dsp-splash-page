import React, { Component } from "react";
import "./login.css";

import map from "./us-map-outline.png";
import locations from "./dsp-location-map.png";

class Login extends Component {
    state = {

    };

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    render() {
        return (
            <div>
                <img src={locations} id="locations" className="map" />
                <div id="mapDots">
                    <img src={map} id="outline" className="map" />
                </div>
            </div>
        )
    };
};

export default Login;