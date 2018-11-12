import React, { Component } from "react";
import "./home.css";

// Components
import PageTop from "../../components/PageTop";
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

                <div id="homePic">
                    <PageTop
                        topQ="DESIGN SERVICE PROFESSIONALS, PLLC"
                        thesis="Design Service Professionals, PLLC is an all-virtual design collaborative specializing in design services for the AEC Industry. Leveraging a diverse reservoir of design professionals, our staff augmentation program, coupled with an eclectic mix of industry experts, allows us to assemble the right team at the right time for our clients & AEC partners. By tapping into the dsp ecosystem, our clients, design-build partners, large project teams, and boutique firms alike will benefit from our unparalleled delivery of high quality design."
                    />
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