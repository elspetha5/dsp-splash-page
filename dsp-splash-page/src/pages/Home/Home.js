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
                        <div id="homeThesis"><span id="mobileHide">Design Service Professionals, PLLC is </span>an <span className="bold thesisColor">all-virtual design collaborative</span> specializing in design services for the AEC Industry. Leveraging a <span className="bold thesisColor">diverse reservoir</span> of design professionals, our staff augmentation program, coupled with an <span className="bold thesisColor">eclectic mix of industry experts</span>, allows us to assemble the right team at the right time for our clients & AEC partners. By tapping into the <span id="dspEco" className="bold thesisColor">dsp ecosystem</span>, our clients, design-build partners, large project teams, and boutique firms alike will benefit from our <span id="unDelivery" className="bold thesisColor">unparalleled delivery</span> of <span id="highQuality" className="bold thesisColor">high quality design</span>.</div>
                    </div>
                </div>

                <div className="wrapper">
                    {this.state.ideas.map(idea1 => (
                        <LeftIdea
                            idea={idea1.idea}
                            verbiage={idea1.verbiage}
                        />
                    ))}
                </div>

            </div>
        )
    };
};

export default Home;