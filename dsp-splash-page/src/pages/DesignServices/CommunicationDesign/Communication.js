import React, { Component } from "react";
import LeftIdea from "../../../components/LeftIdea";
import "./communication.css";

import comms from "../../../JSON/DesignServices/communication.json";

class Communication extends Component {
    state = {
        comms
    };

    componentDidMount() {
        window.scrollTo(0, 0)
      };

    render () {
        return (
            <div className="wrapper">
                {this.state.comms.map(comm => (
                    <div>
                        <LeftIdea 
                        idea={comm.leftIdea}
                        verbiage={comm.rightVerbiage}
                        />
                    </div>
                ))}
            </div>
        )
    };
};

export default Communication;