import React, { Component } from "react";
import "./home.css";

// Components
import PageTop from "../../components/PageTop";

class Home extends Component {
    state = {

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

            </div>
        )
    };
};

export default Home;