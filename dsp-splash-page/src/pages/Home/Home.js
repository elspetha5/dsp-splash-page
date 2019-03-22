import React, { Component } from "react";
import "./home.css";

import logo from "../../components/NavBar/dspLogo.png";

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
                <div id="homeLogo" className="homeHalf">
                    <img src={logo} alt="logo" id="homeLogoIcon"/>
                </div>

                <div id="homeSlant"></div>

                <div id="homeWords" className="homeHalf">
                    <div className="homeTagline">Design Service Professionals . . .</div>
                    <div className="homeTagline">emerging at the intersection</div>
                    <div className="homeTagline">of design + delivery</div>
                </div>

                {/* <div className="taglineBackground">
                    <div className="taglineBox">
                        <div className="taglineThesis">Design Service Professionals . . .</div>
                        <div className="taglineThesis">emerging at the intersection</div>
                        <div className="taglineThesis">of design + delivery</div>
                    </div>
                </div> */}

            </div>
        )
    };
};

export default Home;