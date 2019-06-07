import React, { Component } from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import { Panel } from "react-bootstrap";

// Components
import SlantTop from "../../../components/SlantTop";

import process from "../../../JSON/LargeCompany/process.json";
import services from "../../../JSON/LargeCompany/LCServices.json";

import lcProcess from "./images/lcProcess.png";
import banner from "./images/lcBanner.png";
import fourCs from "./images/fourCs.png";
import trifold from "./LCtrifold/images/lc-trifold1.png";

import "../assets/css/clientPagesCSS/clientPages.css";
import "../assets/css/clientPagesCSS/mediaClientPages.css";

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
            <div id="clientPageWrapper">
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
                            <img src={banner} alt="clientPageBanner" id="clientPageBanner" />
                            <button id="closeModal" className="" onClick={() => { close() }}>close</button>
                        </div>
                    )}
                </Popup>

                <SlantTop
                    color="charcoalish-background"
                    title="process of engagement"
                />

                <div className="clientPageContentWrapper">
                    {this.state.process.map((step, i) => (
                        <Panel eventKey={i}>
                            <Panel.Title id={`clientPageStep${i}`} className="clientPageSteptitle infoWords link" toggle><span className="step">{`step ${step.num}. `}</span>{step.step}</Panel.Title>

                            <Panel.Body collapsible>
                                <div id={`clientPageStepWords${i}`}>
                                    {step.info.map(info => (
                                        <div className="clientPageStepInfo">{info}</div>
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
                        <div className="clientPageContentWrapper">
                            {this.state.services.map(service => (
                                <div className="clientPageServiceWrapper slateWhite-text almostBlack-background">
                                    <div className="clientPageService">{service.title}</div>
                                    <div className="clientPageOfferedService">
                                        {service.services.map(offered => (
                                            (offered.offered === true)
                                                ? <div className="clientPageOfferedOne"><span className="clientPageOfferedTrue">{offered.service}</span></div>
                                                : <div className="clientPageOfferedOne"><span className="clientPageOfferedFalse salmon-background">{offered.service}</span></div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <div id="clientPageCurrent" className="slateWhite-text">
                                <div id="clientPageCurrentBox"></div>indicates currently offered service
                            </div>
                        </div>
                    </div>
                </div>

                <div className="alignClientPagePic">
                    <img src={fourCs} alt="db 4 Cs" id="clientPageFourCs" />
                </div>

                <div className="slantDown lightGrey-background">
                    <div className="unSkewDown">
                        <div className="alignClientPagePic">
                            <img src={lcProcess} alt="lcProcess" id="clientPageProcessPic" />
                        </div>
                    </div>
                </div>

                <Link to="/clients/largecompany/trifold">
                    <img src={trifold} alt="trifold" className="miniTrifold" />
                </Link>

            </div >
        )
    };
};

export default LargeCompany;