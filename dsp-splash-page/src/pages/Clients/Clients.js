import React, { Component } from "react";
import YourThing from "../../components/YourThing";
import "./clients.css";

class Clients extends Component {
    state = {

    };

    componentDidMount() {
        window.scrollTo(0, 0)
      };

    render() {
        return (
            <div>
                <div id="largeCompany" class="yourThree">
                    <YourThing
                    topWords="Your staff."
                    bottomWords="Augmented."
                    link="/clients/contact"
                    buttonWords="Learn more"
                    topDescription="Leverage our staff augmentation program"
                    bottomDescription="suited for large teams and projects"
                    />
                </div>

                <div id="boutiqueCompany" class="yourThree">
                    <YourThing
                    topWords="Your brand."
                    bottomWords="Elevated."
                    link="/clients/contact"
                    buttonWords="Learn more"
                    topDescription="Engage our ecosystem of professionals"
                    bottomDescription="assembled to support your boutique practice"
                    />
                </div>
                
                <div id="design-buildCompany" class="yourThree">
                    <YourThing
                    topWords="Your project."
                    bottomWords="Crafted."
                    link="/clients/contact"
                    buttonWords="Learn more"
                    topDescription="Discover our design process"
                    bottomDescription="tailored for the design-builder"
                    />
                </div>

                
            </div>
        )
    }
};

export default Clients;
