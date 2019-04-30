import React, { Component } from "react";
import YourThing from "../../components/YourThing";
import "./clients.css";

import image from "./your-staff-augmented.jpg";

class Clients extends Component {
    state = {
        imgStatus: "loading"
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    handleImageLoaded = () => {
        this.setState({
            imgStatus: "loadedImageBackground"
        })
    };

    render() {
        return (
            <div className={`clientBackground ${this.state.imgStatus}`}>
                <img src={image} alt="load" id="clientImgLoadCheck" onLoad={() => { this.handleImageLoaded() }} />

                <div id="largeCompany" class="yourThree">
                    <YourThing
                        topWords="Your staff."
                        bottomWords="Augmented."
                        link="/clients/contact"
                        buttonWords="Learn more"
                        topDescription="Leverage our staff "
                        topDescriptionBreak="augmentation program"
                        bottomDescription="suited for "
                        highlighted="large teams and projects"
                        highlightColor="salmon"
                    />
                </div>

                <div id="boutiqueCompany" class="yourThree">
                    <YourThing
                        topWords="Your brand."
                        bottomWords="Elevated."
                        link="/clients/contact"
                        buttonWords="Learn more"
                        topDescription="Engage our ecosystem "
                        topDescriptionBreak="of professionals"
                        bottomDescription="assembled to support your "
                        highlighted="boutique practice"
                        highlightColor="skyblue"
                    />
                </div>

                <div id="design-buildCompany" class="yourThree">
                    <YourThing
                        topWords="Your process."
                        bottomWords="Crafted."
                        link="/clients/designbuild"
                        buttonWords="Learn more"
                        topDescription="Discover our design process"
                        bottomDescription="tailored for the "
                        highlighted="design-builder"
                        highlightColor="greenyellow"
                    />
                </div>


            </div>
        )
    }
};

export default Clients;
