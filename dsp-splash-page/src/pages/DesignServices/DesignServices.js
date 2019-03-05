import React, { Component } from "react";
import { Link } from "react-router-dom";
import LeftIdea from "../../components/LeftIdea";
import Popup from "reactjs-popup";
import "./designServices.css";

import services from "../../JSON/designServices.json";
import interiors from "../../JSON/DesignServices/interior.json";
import arch from "../../JSON/DesignServices/arch.json";
import digital from "../../JSON/DesignServices/digital.json";
import service from "../../JSON/DesignServices/service.json";

class DesignServices extends Component {
    state = {
        services,
        interiors,
        arch,
        digital,
        service
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    render() {
        return (
            <div className="slantBackground">
                <div className="slantTop">
                    <div className="topSlantTitle">
                        dsp.design
                    </div>
                </div>
                <div id="darkBlue"></div>

                <div>
                    <div className="darkSlantTitle">dsp.interiors</div>
                    <div className="slantInfoWrapper">
                        {this.state.interiors.map(interior => (
                            <Popup
                                trigger={<div className="darkSlantInfoTrigger">{interior.leftIdea}</div>}
                                position="right center"
                                closeOnDocumentClick
                                contentStyle={{
                                    "border": "none",
                                    "border-radius": "2%",
                                    "background-color": "#f4f7fc",
                                    "padding": "10px"
                                }}
                            >
                                <div className="popupWords">{interior.rightVerbiage}</div>
                            </Popup>
                        ))}
                    </div>
                </div>

                <div id="pink" className="slantUp">
                    <div className="unSkew">
                        <div className="whiteSlantTitle">dsp.architecture</div>
                        <div className="slantInfoWrapper">
                            {this.state.arch.map(arch => (
                                <Popup
                                    trigger={<div className="whiteSlantInfoTrigger">{arch.leftIdea}</div>}
                                    position="right center"
                                    closeOnDocumentClick
                                    contentStyle={{
                                        "border": "none",
                                        "border-radius": "2%",
                                        "background-color": "#f4f7fc",
                                        "padding": "10px"
                                    }}
                                >
                                    <div className="popupWords">{arch.rightVerbiage}</div>
                                </Popup>
                            ))}
                        </div>

                    </div>
                </div>

                <div>
                    <div className="darkSlantTitle">dsp.graphics</div>
                    <div className="slantInfoWrapper">
                        <div className="darkSlantInfo">product design</div>
                        <div className="darkSlantInfo">web design</div>
                        <div className="darkSlantInfo">UI/UX</div>
                        <div className="darkSlantInfo">app design</div>
                        <div className="darkSlantInfo">graphic design</div>
                    </div>
                </div>

                <div id="green" className="slantDown">
                    <div className="unSkewDown">
                        <div className="whiteSlantTitle">dsp.architecture</div>
                        <div className="slantInfoWrapper">
                            {this.state.digital.map(digit => (
                                <Popup
                                    trigger={<div className="whiteSlantInfoTrigger">{digit.leftIdea}</div>}
                                    position="right center"
                                    closeOnDocumentClick
                                    contentStyle={{
                                        "border": "none",
                                        "border-radius": "2%",
                                        "background-color": "#f4f7fc",
                                        "padding": "10px"
                                    }}
                                >
                                    <div className="popupWords">{digit.rightVerbiage}</div>
                                </Popup>
                            ))}
                        </div>

                    </div>
                </div>

                <div>
                    <div className="darkSlantTitle">dsp.brand</div>
                    <div className="slantInfoWrapper">
                        <div className="darkSlantInfo">signage and wayfinding</div>
                        <div className="darkSlantInfo">digital experience</div>
                        <div className="darkSlantInfo">event environments</div>
                        <div className="darkSlantInfo">pop-ups</div>
                    </div>
                </div>

                <div id="pink" className="slantUp">
                    <div className="unSkew">
                        <div className="whiteSlantTitle">dsp.service</div>
                        <div className="slantInfoWrapper">
                            {this.state.service.map(service => (
                                <Popup
                                    trigger={<div className="whiteSlantInfoTrigger">{service.leftIdea}</div>}
                                    position="right center"
                                    closeOnDocumentClick
                                    contentStyle={{
                                        "border": "none",
                                        "border-radius": "2%",
                                        "background-color": "#f4f7fc",
                                        "padding": "10px"
                                    }}
                                >
                                    <div className="popupWords">{service.rightVerbiage}</div>
                                </Popup>
                            ))}
                        </div>

                    </div>
                </div>

                <div>
                    <div className="darkSlantTitle">dsp.industrial</div>
                    <div className="slantInfoWrapper">
                        <div className="darkSlantInfo">industrial design</div>
                        <div className="darkSlantInfo">furniture design</div>
                        <div className="darkSlantInfo">mass market</div>
                        <div className="darkSlantInfo">consumer electronics</div>
                        <div className="darkSlantInfo">sustainability</div>
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