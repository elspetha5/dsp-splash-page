import React, { Component } from "react";
import YourThing from "../../components/YourThing";
import "./clients.css";

class Clients extends Component {
    state = {

    };

    render() {
        return (
            <div>
                <div id="largeCompany" class="yourThree">
                    <YourThing
                    topWords="Your staff."
                    bottomWords="Augmented."
                    link="/"
                    buttonWords="Learn more"
                    topDescripton=""
                    bottomDescription="Learn more about our staff augmentation program"
                    />
                </div>
                
                <div id="design-buildCompany" class="yourThree">
                    <YourThing
                    topWords="Your project."
                    bottomWords="Augmented."
                    link="/"
                    buttonWords="Learn more"
                    topDescripton=""
                    bottomDescription="Learn more about our design process"
                    />
                </div>

                <div id="boutiqueCompany" class="yourThree">
                    <YourThing
                    topWords="Your brand."
                    bottomWords="Augmented."
                    link="/"
                    buttonWords="Learn more"
                    topDescripton=""
                    bottomDescription="Learn more about our ecosystem"
                    />
                </div>
            </div>
        )
    }
};

export default Clients;
