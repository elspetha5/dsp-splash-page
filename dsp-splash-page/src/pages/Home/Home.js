import React, { Component } from "react";
import "./home.css";

import logo from "./dspLogo-outline-lightBlue.png";

// Files
import ideas from "../../JSON/home.json";

class Home extends Component {
    state = {
        ideas
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    render() {
        return (
            <div id="homepage">
                <div id="homeSlant"></div>

                <div id="homeLogo" className="homeHalf">
                    <img src={logo} alt="logo" id="homeLogoIcon" />
                </div>

                <div id="homeWords" className="homeHalf">
                    <div className="homeTagline">Design Service Professionals . . .</div>
                    <div className="homeTagline">Design Services for the Design Community</div>
                    {/* <div className="homeTagline"> Design Community</div> */}
                </div>

            </div>
        )
    };
};

export default Home;