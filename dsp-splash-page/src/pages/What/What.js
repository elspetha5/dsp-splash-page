import React, { Component } from "react";
import "./what.css";

/* import QPage from "../../components/QPage"; */
import LeftIdea from "../../components/LeftIdea";
import RightIdea from "../../components/RightIdea";

import contents from "../../content.json";
import ideas from "../../what.json"

class What extends Component {
    state = {
        contents,
        ideas
    };

    render() {
        return (
            <div>
                {/* <QPage
                question={this.state.contents[0].question}
                 answer={this.state.contents[0].answer}
                /> */}

                <div className="topPic">
                    <div className="topQ">What are we building?</div>
                    <div className="thesis">Design Service Professionals, PLLC is an all-virtual design collaborative specializing in design services for the AEC Industry. Leveraging a diverse reservoir of design professionals, our staff augmentation program, coupled with an eclectic mix of industry experts, allows us to assemble the right team at the right time for our clients & AEC partners. By tapping into the dsp ecosystem, our clients, design-build partners, large project teams, and boutique firms alike will benefit from our unparalleled delivery of high quality design.</div>
                </div>

                {this.state.ideas.map(idea1 => (
                    <LeftIdea
                        idea={idea1.idea}
                        verbiage={idea1.verbiage}
                    />
                ))}

                {/* <LeftIdea
                    idea={this.state.ideas[0].idea}
                    verbiage={this.state.ideas[0].verbiage}
                />

                <RightIdea 
                    idea={this.state.ideas[1].idea}
                    verbiage={this.state.ideas[1].verbiage}
                />

                <LeftIdea
                    idea={this.state.ideas[2].idea}
                    verbiage={this.state.ideas[2].verbiage}
                />

                <RightIdea 
                    idea={this.state.ideas[3].idea}
                    verbiage={this.state.ideas[3].verbiage}
                />

                <LeftIdea
                    idea={this.state.ideas[4].idea}
                    verbiage={this.state.ideas[4].verbiage}
                />

                <RightIdea 
                    idea={this.state.ideas[5].idea}
                    verbiage={this.state.ideas[5].verbiage}
                />

                <LeftIdea
                    idea={this.state.ideas[6].idea}
                    verbiage={this.state.ideas[6].verbiage}
                />

                <RightIdea 
                    idea={this.state.ideas[7].idea}
                    verbiage={this.state.ideas[7].verbiage}
                /> */}

            </div>
        )
    };
};

export default What;