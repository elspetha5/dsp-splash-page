import React, { Component } from "react";
import Popup from "reactjs-popup";
import { Panel } from "react-bootstrap";

// Components
import SlantTop from "../../../components/SlantTop";
import NoSlant from "../../../components/SlantInfo/NoSlant";
import SlantUp from "../../../components/SlantInfo/SlantUp";
import SlantDown from "../../../components/SlantInfo/SlantDown";

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

                <NoSlant>
                    {this.state.process.map((step, i) => (
                        <Panel eventKey={i}>
                            <Panel.Title id={`lcStep${i}`} className="lcSteptitle infoWords link" toggle><span className="step">{`step ${step.num}.`}</span>{` ${step.step}`}</Panel.Title>

                            <Panel.Body collapsible>
                                <div id={`lcStepWords${i}`}>{step.info}</div>
                            </Panel.Body>
                        </Panel>
                    ))}
                </NoSlant>

                <SlantUp
                    background="salmon-background"
                    titleColor="slateWhite-text"
                    title="services"
                >
                    {this.state.services.map(service => (
                        <div className="lcServiceWrapper slateWhite-text">
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

                </SlantUp>


            </div>
        )
    };
};

export default LargeCompany;