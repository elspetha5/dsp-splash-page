import React, { Component } from "react";
import Popup from "reactjs-popup";

// Components
import SlantTop from "../../../components/SlantTop";
import SlantUp from "../../../components/SlantInfo/SlantUp";
import SlantDown from "../../../components/SlantInfo/SlantDown";

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
                    title="design build"
                />

                <div className="alignDBPic">
                    <img src={process} alt="dbProcess" id="dbProcessPic" />
                </div>

                <SlantUp
                    background="yellow-background"
                    titleColor="charcoalish-text"
                    title="design-build process"
                >
                    <div className="infoWords charcoalish-text">Design Service Professionals, PLLC (DSP Design) is an all-virtual design collaborative built on the premise that great design is only as good as its ability to be realized.</div>
                    <div className="infoWords charcoalish-text">We have no front door. Instead, we leverage co-working facilities to provide settings for individual work, small meetings and team conferences as needed. Keeping overhead costs low allows us to provide premium design services at a competitive rate.</div>
                    <div className="infoWords charcoalish-text">As design delivery methods evolve toward more efficient, fast-tracked processes, there is an increasing need for both designer and contractor to work on a united front. As such, DSP is committed to an integrated approach to project delivery, placing the contractor at the core of the design team from the very beginning.</div>
                    <div className="infoWords charcoalish-text">At DSP we're committed to providing only the highest quality design and delivery services, including a deep bench of seasoned architects and technical staff prepared to facilitate a thorough quality assurance program.</div>
                    <div className="infoWords charcoalish-text">We are building an unprecedented virtual design practice that can be anywhere you need us to be.</div>
                </SlantUp>

                <div className="alignDBPic">
                    <img src={process} alt="dbProcess" id="dbProcessPic" />
                </div>

                <SlantDown
                    background="green-background"
                    titleColor="charcoalish-text"
                    title="constructability concept"
                >
                    <div className="infoWords charcoalish-text">At DSP we are committed to Integrated Project Delivery. Our design staff are fully Revit trained and completely supported by Revit Certified Professionals and licensed architects. Our goal is to make each and every project a reality by proposing design solutions with constructible outcomes in mind</div>
                    <div className="infoWords charcoalish-text">To achieve these outcomes, we’ve augmented CSI’s four C’s of effective communication to include cost, collaboration, and coordination. These additional components are essential to our quality management program, saving time, cutting costs and elevating the craft of the process.</div>
                </SlantDown>

            </div>
        )
    };
};

export default DesignBuild;