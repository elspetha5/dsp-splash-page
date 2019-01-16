import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./approach.css";

// Components
import LeftIdea from "../../components/LeftIdea";

// Files
import ideas from "../../JSON/home.json";

class Approach extends Component {
    state = {
        ideas
    };

    componentDidMount() {
        window.scrollTo(0, 0)
      };

    render() {
        return (
            <div>
                

                <div id="homePic">
                    <div className="topPic">
                        <div id="homeTitle" className="topQ">DESIGN SERVICE PROFESSIONALS, PLLC</div>

                        <div id="homeThesisWrapper">
                            <div className="homeThesis"><span id="mobileHide">Design Service Professionals, PLLC is </span>an <AnchorLink offset="70" href="#collaborative" className="bold thesisColor">all-virtual design collaborative</AnchorLink> specializing in design services for the AEC Industry.</div>

                            <div className="homeThesis">Leveraging a <AnchorLink offset="70" href="#reservoir" className="bold thesisColor">diverse reservoir</AnchorLink> of design professionals, our staff augmentation program, coupled with an <AnchorLink offset="70" href="#experts" className="bold thesisColor">eclectic mix of industry experts</AnchorLink>, allows us to assemble the right team at the right time for our clients & AEC partners.</div>

                            <div className="homeThesis">By tapping into the <AnchorLink offset="70" href="#ecosystem" id="dspEco" className="bold thesisColor">dsp ecosystem</AnchorLink>, our clients, design-build partners, large project teams, and boutique firms alike will benefit from our <AnchorLink offset="70" href="#delivery" id="unDelivery" className="bold thesisColor">unparalleled delivery</AnchorLink> of <AnchorLink offset="70" href="#design" id="highQuality" className="bold thesisColor">high quality design</AnchorLink>.</div>
                        </div>

                    </div>
                </div>

                <div className="wrapper">
                    {this.state.ideas.map(idea1 => (
                        <div>
                            <LeftIdea
                                idea={idea1.idea}
                                verbiage={idea1.verbiage}
                                link={idea1.link}
                            />
                        </div>
                    ))}
                </div>

            </div>
        )
    };
};

export default Approach;