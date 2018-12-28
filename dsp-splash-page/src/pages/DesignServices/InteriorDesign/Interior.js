import React, { Component } from "react";
import LeftIdea from "../../../components/LeftIdea";
import "./interior.css";

import interiors from "../../../JSON/DesignServices/interior.json";

class Interior extends Component {
    state = {
        interiors
    };

    componentDidMount() {
        window.scrollTo(0, 0)
      };

    render () {
        return (
            <div className="wrapper">
                {this.state.interiors.map(interior => (
                    <div>
                        <LeftIdea 
                        idea={interior.leftIdea}
                        verbiage={interior.rightVerbiage}
                        />
                    </div>
                ))}
            </div>
        )
    };
};

export default Interior;