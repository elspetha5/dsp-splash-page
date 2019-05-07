import React, { Component } from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import { Panel } from "react-bootstrap";

// Components
import SlantTop from "../../../components/SlantTop";

import process from "../../../JSON/LargeCompany/process.json";
import services from "../../../JSON/LargeCompany/LCServices.json";
import "./assets/css/largecompany.css";
import "./assets/css/mediaLargecompany.css";

class LargeCompany extends Component {
    state = {
        process,
        services
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    render() {
        return (
            <div id="lcWrapper">

                <SlantTop
                    color="charcoalish-background"
                    title="process of engagement"
                />

                <div className="lcContentWrapper">
                    {this.state.process.map((step, i) => (
                        <Panel eventKey={i}>
                            <Panel.Title id={`lcStep${i}`} className="lcSteptitle infoWords link" toggle><span className="step">{`step ${step.num}.`}</span>{` ${step.step}`}</Panel.Title>

                            <Panel.Body collapsible>
                                <div id={`lcStepWords${i}`}>
                                    {step.info.map(info => (
                                        <div className="lcStepInfo">{info}</div>
                                    ))}
                                    {step.button
                                        ? <Link to={step.button} className="applyButton jobButton">contact us</Link>
                                        : <div></div>
                                    }
                                </div>
                            </Panel.Body>
                        </Panel>
                    ))}
                </div>

                <div className="slantUp salmon-background">
                    <div className="unSkew">
                        <div className="lcContentWrapper">
                            {this.state.services.map(service => (
                                <div className="lcServiceWrapper slateWhite-text almostBlack-background">
                                    <div className="lcService">{service.title}</div>
                                    <div className="lcOfferedService">
                                        {service.services.map(offered => (
                                            (offered.offered === true)
                                                ? <div className="lcOfferedOne"><span className="lcOfferedTrue">{offered.service}</span></div>
                                                : <div className="lcOfferedOne"><span className="lcOfferedFalse">{offered.service}</span></div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <div id="lcCurrent" className="slateWhite-text">
                                <div id="lcCurrentBox"></div>indicates currently offered service
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        )
    };
};

export default LargeCompany;