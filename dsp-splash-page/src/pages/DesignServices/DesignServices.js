import React, { Component } from "react";
import { Link } from "react-router-dom";
import LeftIdea from "../../components/LeftIdea";
import Popup from "reactjs-popup";
import "./designServices.css";

import services from "../../JSON/designServices.json";
import interiors from "../../JSON/DesignServices/interior.json";

class DesignServices extends Component {
    state = {
        services,
        interiors
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    render() {
        return (
            <div className="slantBackground">
                <div className="slantTop">
                    <div className="whiteSlantTitle">
                        dsp.design
                    </div>
                </div>
                <div className="slantDown"></div>

                <div>
                    <div className="darkSlantTitle">dsp.interiors</div>
                    <div className="slantInfoWrapper">
                        {this.state.interiors.map(interior => (
                            <Popup
                                trigger={<div className="slantInfoTrigger">{interior.leftIdea}</div>}
                                position="right center"
                                closeOnDocumentClick
                                contentStyle={{
                                    "border": "none",
                                    "border-radius": "2%",
                                    "background-color": "#1b2c3a",
                                    "padding": "10px"
                                }}
                            >
                                <div className="whitePopupWords">{interior.rightVerbiage}</div>
                            </Popup>
                        ))}
                    </div>
                </div>

                <div className="slantUp slantTop">
                    <div className="unSkew">

                    </div>
                </div>


                {/* <div className="wrapper">
                    <div className="ideaBackground">
                        <div className="leftIdea"><span id="designThesis" className="designThesis">dsp.design</span></div>
                    </div>
    
                    {this.state.services.map(service => (
                        <div className="ideaBackground">
                            <Link to={"/designservices/" + service.link} className="leftIdea link leftServices">{service.umbrella}</Link>
                            <Link to={"/designservices/" + service.link} className="rightVerbiage rightServices">{service.specific}</Link>
                        </div>
                    ))}
                </div> */}
            </div>

        )
    }
};

export default DesignServices;