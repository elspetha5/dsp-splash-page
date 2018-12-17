import React, { Component } from "react";
import YourThing from "../../components/YourThing";
import "./joinus.css";

class JoinUs extends Component {
    state = {

    };

    render() {
        return (
            <div>
                <div id="brand" class="yourTwo">
                    <YourThing
                    topWords="Your brand."
                    bottomWords="Amplified."
                    link="/joinus/partner"
                    buttonWords="Join our ecosystem"
                    topDescription="Join our ecosystem of..."
                    bottomDescription="independently recognized design professionals"
                    />
                </div>
                
                <div id="career" class="yourTwo">
                    <YourThing
                    topWords="Your career."
                    bottomWords="Amplified."
                    link="/joinus/joblist"
                    buttonWords="Join our staff"
                    topDescription="Join our staff of..."
                    bottomDescription="integrated design professionals"
                    />
                </div>
            </div>
        )
    }
};

export default JoinUs;
