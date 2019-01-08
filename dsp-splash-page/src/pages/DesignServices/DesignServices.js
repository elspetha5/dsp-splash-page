import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./designServices.css";

import services from "../../JSON/designServices.json";

class DesignServices extends Component {
    state = {
        services
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    render() {
        return (
            <div className="wrapper">
                <div className="ideaBackground">
                    <div className="leftIdea"><span id="designThesis" className="designThesis">dsp.design</span></div>
                </div>

                {this.state.services.map(service => (
                    <div className="ideaBackground">
                        <Link to={"/designservices/" + service.link} className="leftIdea link leftServices">{service.umbrella}</Link>
                        <Link to={"/designservices/" + service.link} className="rightVerbiage rightServices">{service.specific}</Link>
                    </div>
                ))}
            </div>

        )
    }
};

export default DesignServices;