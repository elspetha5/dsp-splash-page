import React, { Component } from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";

// Components
import SlantTop from "../../../components/SlantTop";
import SlantUp from "../../../components/SlantInfo/SlantUp";
import SlantDown from "../../../components/SlantInfo/SlantDown";

import process from "./assets/images/dbProcess.png";
import banner from "./assets/images/dbBanner.png";
import fourCs from "./assets/images/fourCs.png";
import trifold from "./DBtrifold/assets/images/db-trifold1.png";
import "./assets/css/designBuild.css";
import "./assets/css/mediaDesignBuild.css";


class DesignBuild extends Component {
    state = {

    }

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    render() {
        return (
            <div id="dbWrapper" >
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
                            <img src={banner} alt="dbBanner" id="dbBanner" />
                            <button id="closeModal" className="" onClick={() => { close() }}>close</button>
                        </div>
                    )}
                </Popup>

                <SlantTop
                    color="charcoalish-background"
                    title="design-build"
                />

                <div className="alignDBPic">
                    <img src={process} alt="dbProcess" id="dbProcessPic" />
                </div>

                <SlantUp
                    background="yellow-background"
                    titleColor="charcoalish-text"
                    title="design-build process"
                >
                    <div className="infoWords charcoalish-text">Design Service Professionals, PLLC (DSP) is an all-virtual design collective built on the premise that effective collaboration knows no geographic boundaries and that a sound understanding of local codes is 100% essential. We are building an unprecedented virtual design practice that can be anywhere you need us to be.</div>
                    <div className="infoWords charcoalish-text">We are committed to delivering premium design services. Our design team is supported by a deep bench of seasoned architects and technical design staff prepared to facilitate a thorough quality assurance program, tailored to each of your Design-Build projects.</div>
                    <div className="infoWords charcoalish-text">At DSP we work hard to keep our fees competitive. We work from home offices, leveraging co-working facilities to provide settings for individual work, small meetings, and team conferences as needed. This keeps our overhead costs low, allowing us to provide premium design services at competitive rates.</div>
                </SlantUp>

                <div className="alignDBPic">
                    <img src={fourCs} alt="db 4 Cs" id="dbFourCs" />
                </div>

                <SlantDown
                    background="green-background"
                    titleColor="charcoalish-text"
                    title="constructability concept"
                >
                    <div className="infoWords charcoalish-text">Great design is only as good as its ability to be realized. In order to get the job done right, we are committed to Integrated Project Delivery. Our design staff is fully Revit trained and completely supported by Revit Certified Professionals and licensed architects. Our goal is to make each and every project a reality by proposing design solutions with constructible outcomes.</div>
                    <div className="infoWords charcoalish-text">We've aumented CSI's 4 C's of effective communication to include cost, estimatation, collaboration, and coordination. These additional components are essential to our quality management program, saving time, cutting costs, and elevation the craft of design process to match the craft of your best trade partners.</div>
                </SlantDown>

                <Link to="/clients/designbuild/trifold">
                    <img src={trifold} alt="trifold" className="miniTrifold" />
                </Link>

            </div>
        )
    };
};

export default DesignBuild;