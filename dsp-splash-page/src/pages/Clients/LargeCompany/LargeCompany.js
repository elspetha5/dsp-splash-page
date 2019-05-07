import React, { Component } from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import { Panel } from "react-bootstrap";

// Components
import SlantTop from "../../../components/SlantTop";

import process from "../../../JSON/LargeCompany/process.json";
import services from "../../../JSON/LargeCompany/LCServices.json";

import lcProcess from "./assets/images/dbProcess.png";
import banner from "./assets/images/lcBanner.png";
import fourCs from "./assets/images/fourCs.png";

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
                <Popup
                    open={true}
                    modal
                    closeOnDocumentClick
                    lockScroll={true}
                    position='top center'
                    contentStyle={{
                        borderRadius: "5px",
                        border: "none",
                        padding: "1vw",
                        backgroundColor: "#f4f7fcc4",
                        width: "72vw"
                    }}
                >
                    {close => (
                        <div>
                            {/* <div className="close almostBlack-text" onClick={close}>&times;</div> */}
                            <img src={banner} alt="dbBanner" id="dbBanner" />
                            <button id="closeModal" className="" onClick={() => { close() }}>close</button>
                        </div>
                    )}
                </Popup>

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

                {/* <div className="alignLCPic">
                    <img src={lcProcess} alt="lcProcess" id="lcProcessPic" />
                </div> */}

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

                <div className="alignLCPic">
                    <img src={fourCs} alt="db 4 Cs" id="lcFourCs" />
                </div>

            </div>
        )
    };
};

export default LargeCompany;