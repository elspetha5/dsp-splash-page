import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Popup from "reactjs-popup";
import "./approach.css";

// Components
import LeftIdea from "../../components/LeftIdea";

// Files
import ideas from "../../JSON/home.json";
import where from "../../JSON/where.json";

class Approach extends Component {
    state = {
        ideas,
        where
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    render() {
        return (
            <div className="slantBackground">

                <div className="slantTop">
                    <div className="topSlantTitle">
                        design service professionals, pllc
                    </div>
                </div>
                <div id="darkBlue"></div>

                <div>
                    <div className="darkSlantTitle slantTitle">dsp</div>
                    <div className="slantInfoWrapper">
                        {this.state.ideas.map(idea => (
                            <div className="slantInfoColumn">
                                <Popup
                                    trigger={<div className="darkSlantInfoTrigger centeredPopup">{idea.idea}</div>}
                                    position="right center"
                                    closeOnDocumentClick
                                    contentStyle={{
                                        "border": "none",
                                        "border-radius": "2%",
                                        "background-color": "#f4f7fc",
                                        "padding": "20px"
                                    }}
                                >
                                    <div className="popupWords">{idea.verbiage}</div>
                                </Popup>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="pink" className="slantUp">
                    <div className="unSkew">
                        <div className="whiteSlantTitle slantTitle">what</div>
                        <div className="slantInfoWrapper">
                            <div className="infoWords whiteInfoWords">We're <span className="bold">building an ecosystem</span> of design professionals that kicks butt for our clients</div>
                            <div className="infoWords whiteInfoWords">We're <span className="bold">creating a platform</span> for design services that will lead the industry within 3 years</div>
                            <div className="infoWords whiteInfoWords">We're <span className="bold">disrupting the status quo</span> for design & delivery</div>
                            <div className="infoWords whiteInfoWords">We're <span className="bold">offering a better value</span> for a superior design process</div>
                            <div className="infoWords whiteInfoWords">We're <span className="bold">providing a work-life opportunity</span> that can't be found anywhere else</div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="darkSlantTitle slantTitle">where</div>
                    <div className="slantInfoWrapper">
                        {this.state.where.map(where => (
                            <div className="slantInfoColumn">
                                <Popup
                                    trigger={<div className="darkSlantInfoTrigger centeredPopup">{where.idea}</div>}
                                    position="right center"
                                    closeOnDocumentClick
                                    contentStyle={{
                                        "border": "none",
                                        "border-radius": "2%",
                                        "background-color": "#f4f7fc",
                                        "padding": "20px"
                                    }}
                                >
                                    <div className="popupWords">{where.verbiage}</div>
                                </Popup>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="green" className="slantDown">
                    <div className="unSkewDown">
                        <div className="whiteSlantTitle slantTitle">why</div>
                        <div className="slantInfoWrapper">
                            <div className="infoWords whiteInfoWords">Because <span className="bold">we FINALLY can</span></div>
                            <div className="infoWords whiteInfoWords">Because we've got the <span className="bold">right tech</span>, the <span className="bold">best talent</span>, and a <span className="bold">game changing</span> approach to design & delivery</div>
                            <div className="infoWords whiteInfoWords">Because there's all kinds of <span className="bold">amazing talent outside</span> the typical design office</div>
                            <div className="infoWords whiteInfoWords">Because design services for AEC partners means <span className="bold">we all thrive</span></div>
                            <div className="infoWords whiteInfoWords">Because we can be <span className="bold">even better 'out of office'</span></div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="darkSlantTitle slantTitle">who</div>
                    <div className="slantInfoWrapper">
                        <div className="infoWords">We're connectors, navigators, artists and <span className="bold">design thinkers</span></div>
                        <div className="infoWords">We're <span className="bold">process scientists</span>… constantly pursuing and adapting to the most effective way forward</div>
                        <div className="infoWords">We're integrators, collaborators and <span className="bold">visionaries</span></div>
                        <div className="infoWords">We're <span className="bold">entrepreneurs</span>… developing design solutions to our most pressing problems</div>
                        <div className="infoWords">We're <span className="bold">digital experts</span>… leading the industry in digital process integration</div>
                        <div className="infoWords">We're design service professionals that <span className="bold">recognize what 'service' means</span>… and it's not about us</div>
                        <div className="infoWords">We're makers… textile artisans, wood workers, metalsmiths… <span className="bold">lovers of the craft</span></div>
                        <div className="infoWords">We're high achievers… <span className="bold">independently motivated</span> and deeply rooted in the process of design</div>
                        <div className="infoWords">We're the <span className="bold">next generation</span> of design service professionals</div>
                    </div>
                </div>

                <div id="pink" className="slantUp">
                    <div className="unSkew">
                        <div className="whiteSlantTitle slantTitle">how</div>
                        <div className="slantInfoWrapper">
                            <div className="infoWords whiteInfoWords">By <span className="bold">leveraging technology</span> to connect, collaborate and create in the cloud</div>
                            <div className="infoWords whiteInfoWords">By assembling <span className="bold">the right teams</span> with the right skills <span className="bold">at the right time</span></div>
                            <div className="infoWords whiteInfoWords">By delivering <span className="bold">high quality</span> design services from <span className="bold">start to finish</span></div>
                            <div className="infoWords whiteInfoWords">By <span className="bold">understanding who we're serving</span> and what they care about most</div>
                            <div className="infoWords whiteInfoWords">By placing our <span className="bold">people at the heart</span> of everything that matters</div>
                            <div className="infoWords whiteInfoWords">By augmenting the best in our partners to <span className="bold">achieve more together</span></div>
                        </div>

                    </div>
                </div>




                {/* <div id="homePic">
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
                </div> */}

            </div>
        )
    };
};

export default Approach;