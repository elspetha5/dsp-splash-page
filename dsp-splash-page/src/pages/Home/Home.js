import React, { Component } from "react";
import "./home.css";

// Components
import LeftIdea from "../../components/LeftIdea";

// Files
import ideas from "../../JSON/home.json";

class Home extends Component {
    state = {
        ideas
    };

    render() {
        return (
            <div>
                {/*  bolded goes to scroll point (middle of the page/where high quality design hits) */}

                <div id="homePic">
                    <div className="topPic">
                        <div id="homeTitle" className="topQ">DESIGN SERVICE PROFESSIONALS, PLLC</div>

                        <div id="homeThesisWrapper">
                            <div className="homeThesis"><span id="mobileHide">Design Service Professionals, PLLC is </span>an <a href="#collaborative" className="bold thesisColor">all-virtual design collaborative</a> specializing in design services for the AEC Industry.</div>

                            <div className="homeThesis">Leveraging a <a href="#reservoir" className="bold thesisColor">diverse reservoir</a> of design professionals, our staff augmentation program, coupled with an <a href="#experts" className="bold thesisColor">eclectic mix of industry experts</a>, allows us to assemble the right team at the right time for our clients & AEC partners.</div>

                            <div className="homeThesis">By tapping into the <a href="#ecosystem" id="dspEco" className="bold thesisColor">dsp ecosystem</a>, our clients, design-build partners, large project teams, and boutique firms alike will benefit from our <a href="#delivery" id="unDelivery" className="bold thesisColor">unparalleled delivery</a> of <a href="#design" id="highQuality" className="bold thesisColor">high quality design</a>.</div>
                        </div>

                    </div>
                </div>

                <div className="wrapper">
                    {this.state.ideas.map(idea1 => (
                        <div>
                            <div id={idea1.link}></div>
                            <LeftIdea
                                idea={idea1.idea}
                                verbiage={idea1.verbiage}
                            />
                        </div>
                    ))}
                </div>

            </div>
        )
    };
};

export default Home;