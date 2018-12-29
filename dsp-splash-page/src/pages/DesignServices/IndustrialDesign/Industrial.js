import React, { Component } from "react";
import LeftIdea from "../../../components/LeftIdea";
import "./industrial.css";

import industs from "../../../JSON/DesignServices/industrial.json";

class Industrial extends Component {
    state = {
        industs
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    render() {
        return (
            <div className="wrapper">
                <div className="ideaBackground">
                    <div className="leftIdea"><span id="designThesis">dsp.industrial</span></div>
                </div>

                {this.state.industs.map(indust => (
                    <div>
                        <LeftIdea
                            idea={indust.leftIdea}
                            verbiage={indust.rightVerbiage}
                        />
                    </div>
                ))}
            </div>
        )
    };
};

export default Industrial;