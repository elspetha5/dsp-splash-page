import React, { Component } from "react";
import Popup from "reactjs-popup";

// Components
import SlantTop from "../../../components/SlantTop";
import SlantUp from "../../../components/SlantInfo/SlantUp";
import SlantDown from "../../../components/SlantInfo/SlantDown";
import DbProcess from "./graphics/DbProcess";

import process from "./assets/images/dbProcess.png";
import banner from "./assets/images/dbBanner.png";
import fourCs from "./assets/images/fourCs.png";
import "./assets/css/designBuild.css";
import "./assets/css/mediaDesignBuild.css";

import trifold1 from "./assets/images/db-trifold1.png";
import trifoldCenterPeek from "./assets/images/db-trifold-center-peek.png";
import trifold2 from "./assets/images/db-trifold2.png";
import trifold3 from "./assets/images/db-trifold3.png";
import trifoldCenter from "./assets/images/db-trifold-center.png";

class DesignBuild extends Component {
    state = {
        trifold1Img: trifold1,
        trifold1: "trifold1-straight",
        trifold2: "triInvisible",
        trifold3: "triInvisible",
        trifoldCenter: "triInvisible"
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    handleTrifold = () => {
        if (this.state.trifold1 === "trifold1-straight") {
            this.setState({
                trifold1: "trifold1-open",
                trifold2: "trifold2-straight"
            })

            setTimeout(() => {
                this.setState({
                    trifold1Img: trifoldCenterPeek
                })
            }, 1500)
        } else {
            this.setState({
                trifold1Img: trifold1,
                trifold1: "trifold1-straight",
                trifold2: "triInvisible",
                trifold3: "triInvisible",
                trifoldCenter: "triInvisible"
            })
        }
    }

    render() {
        return (
            <div id="dbWrapper" >
                <div id="triWrapper" onClick={() => this.handleTrifold()}>
                    <img src={this.state.trifold1Img} alt="dbTrifold" id={this.state.trifold1} className="trifoldImg trifoldThree" />
                    <img src={trifold2} alt="dbTrifold" id={this.state.trifold2} className="trifoldImg trifoldThree" />
                    <img src={trifold3} alt="dbTrifold" id={this.state.trifold3} className="trifoldImg trifoldThree" />
                    <img src={trifoldCenter} alt="dbTrifold" id={this.state.trifoldCenter} className="trifoldImg" />
                </div>



                {/* <Popup
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
                    <div className="infoWords charcoalish-text">Design Service Professionals, PLLC (DSP Design) is an all-virtual design collaborative built on the premise that great design is only as good as its ability to be realized.</div>
                    <div className="infoWords charcoalish-text">We have no front door. Instead, we leverage co-working facilities to provide settings for individual work, small meetings and team conferences as needed. Keeping overhead costs low allows us to provide premium design services at a competitive rate.</div>
                    <div className="infoWords charcoalish-text">As design delivery methods evolve toward more efficient, fast-tracked processes, there is an increasing need for both designer and contractor to work on a united front. As such, DSP is committed to an integrated approach to project delivery, placing the contractor at the core of the design team from the very beginning.</div>
                    <div className="infoWords charcoalish-text">At DSP we're committed to providing only the highest quality design and delivery services, including a deep bench of seasoned architects and technical staff prepared to facilitate a thorough quality assurance program.</div>
                    <div className="infoWords charcoalish-text">We are building an unprecedented virtual design practice that can be anywhere you need us to be.</div>
                </SlantUp>

                <div className="alignDBPic">
                    <img src={fourCs} alt="db 4 Cs" id="dbFourCs" />
                </div>

                <SlantDown
                    background="green-background"
                    titleColor="charcoalish-text"
                    title="constructability concept"
                >
                    <div className="infoWords charcoalish-text">At DSP we are committed to Integrated Project Delivery. Our design staff are fully Revit trained and completely supported by Revit Certified Professionals and licensed architects. Our goal is to make each and every project a reality by proposing design solutions with constructible outcomes in mind</div>
                    <div className="infoWords charcoalish-text">To achieve these outcomes, we’ve augmented CSI’s four C’s of effective communication to include cost, collaboration, and coordination. These additional components are essential to our quality management program, saving time, cutting costs and elevating the craft of the process.</div>
                </SlantDown> */}

            </div>
        )
    };
};

export default DesignBuild;