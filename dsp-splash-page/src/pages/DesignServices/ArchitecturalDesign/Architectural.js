import React, { Component } from "react";
import LeftIdea from "../../../components/LeftIdea";
import "./architectural.css";

import archs from "../../../JSON/DesignServices/arch.json";

class Architectural extends Component {
    state = {
        archs
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    render() {
        return (
            <div className="wrapper">
                <div className="ideaBackground">
                    <div className="leftIdea"><span id="designThesis">dsp.architecture</span></div>
                </div>

                {this.state.archs.map(arch => (
                    <div>
                        <LeftIdea
                            idea={arch.leftIdea}
                            verbiage={arch.rightVerbiage}
                        />
                    </div>
                ))}
            </div>
        )
    };
};

export default Architectural;