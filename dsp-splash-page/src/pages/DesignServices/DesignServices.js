import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./designServices.css";

// Components
import PageTop from "../../components/PageTop";

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
            <div>

                <div id="servicesPic">
                    <PageTop
                        topQ="Design Services"
                    />
                </div>

                <div className="wrapper">
                    {this.state.services.map(service => (
                        <div className="ideaBackground">
                            <Link to={"/designservices/" + service.link} className="leftIdea link services">{service.umbrella}</Link>
                            <div className="rightVerbiage">{service.specific}</div>
                        </div>
                    ))}
                </div>

            </div>
        )
    }
};

export default DesignServices;