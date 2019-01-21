import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./home.css";
import graphic from "./thumbprint-intersection.png"

// Components
import LeftIdea from "../../components/LeftIdea";

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
                <div className="yourTwo">
                    <img src={graphic} alt="thumbprintIntersection" id="thumbprintIntersection" />
                </div>

                <div className="yourTwo">
                    <div className="taglineBackground">
                        <div className="taglineBox">
                            <div className="taglineThesis">Design Service Professionals…</div>
                            <div className="taglineThesis">emerging at the intersection</div>
                            <div className="taglineThesis">of design & delivery</div>
                        </div>
                    </div>
                </div>

            </div>
        )
    };
};

export default Home;