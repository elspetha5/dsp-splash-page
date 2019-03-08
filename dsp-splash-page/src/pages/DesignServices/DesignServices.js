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
        service,
        graphics: ["product design", "web design", "UI/UX", "app design", "graphic design"],
        brand: ["digital experience", "event environments", "signage and wayfinding", "pop-ups"],
        industrial: ["industrial design", "furniture design", "mass market", "consumer electronics", "sustainability"]
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
                    <div className="darkSlantTitle slantTitle">dsp.interiors</div>
                    <div className="slantInfoWrapper">
                        {this.state.interiors.map(interior => (
                            <div className="slantInfoColumn">
                                <Popup
                                    trigger={<div className="darkSlantInfoTrigger centeredPopup">{interior.leftIdea}</div>}
                                    position="right center"
                                    closeOnDocumentClick
                                    contentStyle={{
                                        "border": "none",
                                        "border-radius": "2%",
                                        "background-color": "#f4f7fc",
                                        "padding": "20px"
                                    }}
                                >
                                    <div className="popupWords">{interior.rightVerbiage}</div>
                                </Popup>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="pink" className="slantUp">
                    <div className="unSkew">
                        <div className="whiteSlantTitle slantTitle">dsp.architecture</div>
                        <div className="slantInfoWrapper">
                            {this.state.arch.map(arch => (
                                <div className="slantInfoColumn">
                                    <Popup
                                        trigger={<div className="whiteSlantInfoTrigger centeredPopup">{arch.leftIdea}</div>}
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
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                <div>
                    <div className="darkSlantTitle slantTitle">dsp.graphics</div>
                    <div className="slantInfoWrapper">
                        {this.state.graphics.map(graphic => (
                            <div className="slantInfoColumn">
                                <div className="darkSlantInfo">{graphic}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="green" className="slantDown">
                    <div className="unSkewDown">
                        <div className="whiteSlantTitle slantTitle">dsp.digital</div>
                        <div className="slantInfoWrapper">
                            {this.state.digital.map(digit => (
                                <div className="slantInfoColumn">
                                    <Popup
                                        trigger={<div className="whiteSlantInfoTrigger centeredPopup">{digit.leftIdea}</div>}
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
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                <div>
                    <div className="darkSlantTitle slantTitle">dsp.brand</div>
                    <div className="slantInfoWrapper">
                        {this.state.brand.map(brand => (
                            <div className="slantInfoColumn">
                                <div className="darkSlantInfo">{brand}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="pink" className="slantUp">
                    <div className="unSkew">
                        <div className="whiteSlantTitle slantTitle">dsp.service</div>
                        <div className="slantInfoWrapper">
                            {this.state.service.map(service => (
                                <div className="slantInfoColumn">
                                    <Popup
                                        trigger={<div className="whiteSlantInfoTrigger centeredPopup">{service.leftIdea}</div>}
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
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                <div>
                    <div className="darkSlantTitle slantTitle">dsp.industrial</div>
                    <div className="slantInfoWrapper">
                        {this.state.industrial.map(industrial => (
                            <div className="slantInfoColumn">
                                <div className="darkSlantInfo">{industrial}</div>
                            </div>
                        ))}
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