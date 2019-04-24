import React, { Component } from "react";
import Popup from "reactjs-popup";
import SlantTop from "../../../components/SlantTop";

import process from "./dbProcess.png";
import banner from "./dbBanner.png";
import "./designBuild.css";

class DesignBuild extends Component {
    state = {

    }

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    render() {
        return (
            <div id="dbWrapper">
                <Popup
                    open={true}
                    modal
                    closeOnDocumentClick
                    lockScroll={true}
                    position='top center'
                    contentStyle={{
                        borderRadius: "5px",
                        border: "none",
                        padding: "1em",
                        backgroundColor: "#e2e1e3a8",
                        width: "90vw"
                    }}
                >
                    {close => (
                        <div>
                            <div className="close slateWhite-text" onClick={close}>&times;</div>

                            <img src={banner} alt="dbBanner" id="dbBanner" />

                            {/* <button id="closeModal" className="" onClick={() => { close() }}>close</button> */}
                        </div>
                    )}
                </Popup>

                <SlantTop
                    color="charcoalish-background"
                    title="design build"
                />

                <div className="alignDBPic">
                    <img src={process} alt="dbProcess" id="dbProcessPic" />
                </div>

                <div id="dbProcessWordsWrapper" className="yellow-background charcoalish-text slantUp">
                    <div className="unSkew">
                        <div className="dbProcessWords">Design Service Professionals, PLLC (DSP Design) is an all-virtual design collaborative built on the premise that great design is only as good as its ability to be realized.</div>
                        <div className="dbProcessWords">We have no front door. Instead, we leverage co-working facilities to provide settings for individual work, small meetings and team conferences as needed. Keeping overhead costs low allows us to provide premium design services at a competitive rate.</div>
                        <div className="dbProcessWords">As design delivery methods evolve toward more efficient, fast-tracked processes, there is an increasing need for both designer and contractor to work on a united front. As such, DSP is committed to an integrated approach to project delivery, placing the contractor at the core of the design team from the very beginning.</div>
                        <div className="dbProcessWords">At DSP we're committed to providing only the highest quality design and delivery services, including a deep bench of seasoned architects and technical staff prepared to facilitate a thorough quality assurance program.</div>
                        <div className="dbProcessWords">We are building an unprecedented virtual design practice that can be anywhere you need us to be.</div>
                    </div>
                </div>

                <div className="alignDBPic">
                    <img src={process} alt="dbProcess" id="dbProcessPic" />
                </div>

                <div id="dbProcessWordsWrapper" className="green-background charcoalish-text slantDown">
                    <div className="unSkewDown">
                        <div className="dbProcessWords">At DSP we are committed to Integrated Project Delivery. Our design staff are fully Revit trained and completely supported by Revit Certified Professionals and licensed architects. Our goal is to make each and every project a reality by proposing design solutions with constructible outcomes in mind</div>
                        <div className="dbProcessWords">To achieve these outcomes, we’ve augmented CSI’s four C’s of effective communication to include cost, collaboration, and coordination. These additional components are essential to our quality management program, saving time, cutting costs and elevating the craft of the process.</div>
                    </div>
                </div>

            </div>
        )
    };
};

export default DesignBuild;