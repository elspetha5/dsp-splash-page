import React, { Component } from "react";
import "./designServices.css";

// Components
import PageTop from "../../components/PageTop";
import LeftIdea from "../../components/LeftIdea";

import services from "../../JSON/designServices.json";

class DesignServices extends Component {
    state = {
        services
    };

    render() {
        return (
            <div>

                <div id="servicesPic">
                    <PageTop 
                    topQ="Design Services"
                    />
                </div>

                <div className="wrapper">
                    {this.state.services.map(service => (
                        <LeftIdea 
                            idea={service.umbrella}
                            verbiage={service.specific}
                        />
                    ))}
                </div>

            </div>
        )
    }
};

export default DesignServices;