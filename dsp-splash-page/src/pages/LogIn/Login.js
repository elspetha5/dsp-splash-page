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
                <div id="mapDots">
                    <img src={map} id="outline" className="map" />
                    <div id="sanFran" className="dots">
                        <div className="dot sanFran"></div>
                        <div id="sanFranWords">San Francisco</div>
                    </div>
                    <div id="sl" className="dots">
                        <div className="dot sl"></div>
                    </div>
                    <div id="phx" className="dots">
                        <div className="dot phx"></div>
                    </div>
                    <div id="minn" className="dots">
                        <div className="dot minn"></div>
                    </div>
                    <div id="austin" className="dots">
                        <div className="dot austin"></div>
                    </div>
                    <div id="chi" className="dots">
                        <div className="dot chi"></div>
                    </div>
                    <div id="atl" className="dots">
                        <div className="dot atl"></div>
                    </div>
                    <div id="brooklyn" className="dots">
                        <div className="dot brooklyn"></div>
                    </div>
                </div>
            </div>
        )
    };
};

export default Login;