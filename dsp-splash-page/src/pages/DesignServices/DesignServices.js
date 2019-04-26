import React, { Component } from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "./designServices.css";

// Components
import SlantTop from "../../components/SlantTop";
import SlantUp from "../../components/SlantInfo/SlantUp";
import SlantDown from "../../components/SlantInfo/SlantDown";
import NoSlant from "../../components/SlantInfo/NoSlant";

//JSON
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
            <div className="dsBackground">

                <SlantTop
                    color="charcoalish-background"
                    title="dsp.design"
                />

                <NoSlant
                    title="dsp.interiors"
                >
                    {this.state.interiors.map(interior => (
                        <div className="slantInfoColumn">
                            <Popup
                                trigger={<Link to="#" className="darkSlantInfoTrigger centeredPopup">{interior.leftIdea}</Link>}
                                position="top center"
                                closeOnDocumentClick
                                contentStyle={{
                                    "border": "none",
                                    "border-radius": "2%",
                                    "background-color": "#f4f7fc",
                                    "padding": "20px",
                                    "font-size": "110%",
                                    "color": "#757579"
                                }}
                            >
                                <div className="popupWords nightBlue-text">{interior.rightVerbiage}</div>
                            </Popup>
                        </div>
                    ))}
                </NoSlant>

                <SlantUp
                    background="green-background"
                    titleColor="slateWhite-text"
                    title="dsp.architecture"
                >
                    {this.state.arch.map(arch => (
                        <div className="slantInfoColumn">
                            <Popup
                                trigger={<Link to="#" className="whiteSlantInfoTrigger centeredPopup">{arch.leftIdea}</Link>}
                                position="top center"
                                closeOnDocumentClick
                                contentStyle={{
                                    "border": "none",
                                    "border-radius": "2%",
                                    "background-color": "#f4f7fc",
                                    "padding": "10px",
                                    "font-size": "110%",
                                    "color": "#757579"
                                }}
                            >
                                <div className="popupWords nightBlue-text">{arch.rightVerbiage}</div>
                            </Popup>
                        </div>
                    ))}
                </SlantUp>

                <NoSlant
                    title="dsp.graphics"
                >
                    {this.state.graphics.map(graphic => (
                        <div className="slantInfoColumn">
                            <div className="charcoalish-text">{graphic}</div>
                        </div>
                    ))}
                </NoSlant>

                <SlantDown
                    background="nightBlue-background"
                    titleColor="slateWhite-text"
                    title="dsp.digital"
                >
                    {this.state.digital.map(digit => (
                        <div className="slantInfoColumn">
                            <Popup
                                trigger={<Link to="#" className="whiteSlantInfoTrigger centeredPopup">{digit.leftIdea}</Link>}
                                position="top center"
                                closeOnDocumentClick
                                contentStyle={{
                                    "border": "none",
                                    "border-radius": "2%",
                                    "background-color": "#f4f7fc",
                                    "padding": "10px",
                                    "font-size": "110%",
                                    "color": "#757579"
                                }}
                            >
                                <div className="popupWords nightBlue-text">{digit.rightVerbiage}</div>
                            </Popup>
                        </div>
                    ))}
                </SlantDown>

                <NoSlant
                    title="dsp.brand"
                >
                    {this.state.brand.map(brand => (
                        <div className="slantInfoColumn">
                            <div className="charcoalish-text">{brand}</div>
                        </div>
                    ))}
                </NoSlant>

                <SlantUp
                    background="green-background"
                    titleColor="slateWhite-text"
                    title="dsp.service"
                >
                    {this.state.service.map(service => (
                        <div className="slantInfoColumn">
                            <Popup
                                trigger={<Link to="#" className="whiteSlantInfoTrigger centeredPopup">{service.leftIdea}</Link>}
                                position="top center"
                                closeOnDocumentClick
                                contentStyle={{
                                    "border": "none",
                                    "border-radius": "2%",
                                    "background-color": "#f4f7fc",
                                    "padding": "10px",
                                    "font-size": "110%",
                                    "color": "#757579"
                                }}
                            >
                                <div className="popupWords nightBlue-text">{service.rightVerbiage}</div>
                            </Popup>
                        </div>
                    ))}
                </SlantUp>

                <NoSlant
                    title="dsp.industrial"
                >
                    {this.state.industrial.map(industrial => (
                        <div className="slantInfoColumn">
                            <div className="charcoalish-text">{industrial}</div>
                        </div>
                    ))}
                </NoSlant>
            </div >

        )
    }
};

export default DesignServices;