import React, { Component } from "react";

import process from "./dbProcess.png";
import "./designBuild.css";

class DesignBuild extends Component {
    state = {

    }

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    render() {
        return (
            <div id="dbWrapper">
                <div className="dbTitle nightBlue-background slateWhite-text">design build process</div>
                
                <img src={process} alt="dbProcess" id="dbProcess"/>
                
                <div id="dbProcessWordsWrapper">
                    <div className="dbProcessWords">Design Service Professionals, PLLC (DSP Design) is an all-virtual design collaborative built on the premise that great design is only as good as its ability to be realized.</div>
                    <div className="dbProcessWords">We have no front door. Instead, we leverage co-working facilities to provide settings for individual work, small meetings and team conferences as needed. Keeping overhead costs low allows us to provide premium design services at a competitive rate.</div>
                    <div className="dbProcessWords">As design delivery methods evolve toward more efficient, fast-tracked processes, there is an increasing need for both designer and contractor to work on a united front. As such, DSP is committed to an integrated approach to project delivery, placing the contractor at the core of the design team from the very beginning.</div>
                    <div className="dbProcessWords">At DSP we're committed to providing only the highest quality design and delivery services, including a deep bench of seasoned architects and technical staff prepared to facilitate a thorough quality assurance program.</div>
                    <div className="dbProcessWords">We are building an unprecedented virtual design practice that can be anywhere you need us to be.</div>
                </div>

            </div>
        )
    };
};

export default DesignBuild;