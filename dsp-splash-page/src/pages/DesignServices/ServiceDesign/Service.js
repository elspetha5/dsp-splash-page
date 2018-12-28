import React, { Component } from "react";
import LeftIdea from "../../../components/LeftIdea";
import "./service.css";

import services from "../../../JSON/DesignServices/service.json";

class Service extends Component {
    state = {
        services
    };

    componentDidMount() {
        window.scrollTo(0, 0)
      };

    render () {
        return (
            <div className="wrapper">
                {this.state.services.map(service => (
                    <div>
                        <LeftIdea 
                        idea={service.leftIdea}
                        verbiage={service.rightVerbiage}
                        />
                    </div>
                ))}
            </div>
        )
    };
};

export default Service;