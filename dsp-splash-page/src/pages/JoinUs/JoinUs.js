import React, { Component } from "react";
import YourThing from "../../components/YourThing";
import "./joinus.css";

class JoinUs extends Component {
    state = {

    };

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    render() {
        return (
            <div>
                <div id="joinUsTopPic">
                    <div id="joinUsTitle" className="topQ">TWO ENTITIES... ONE ECOSYSTEM</div>

                    <div id="joinUsThesisWrapper">
                        <div className="joinUsInfo">
                            <div className="bold entityTitle">objective</div>
                            <div className="newLine">enable a mode of design the elevates the best in all of us</div>
                        </div>
                        
                        <div className="arrow"><i class="fas fa-angle-right"></i></div>

                        <div className="joinUsInfo">
                            <div className="bold entityTitle">strategy</div>
                            <div className="newLine">a design ecosystem comprised of two distinct entities</div>
                        </div>
                        
                        <div className="arrow"><i class="fas fa-angle-right"></i></div>

                        <div className="joinUsInfo">
                            <div className="bold entityTitle">dsp.nucleus</div>
                            <div className="newLine">an all-virtual design pulse, beating from the inside</div>
                        </div>
                        
                        <div className="arrow"><i class="fas fa-angle-right"></i></div>

                        <div className="joinUsInfo">
                            <div className="bold entityTitle">dsp.network</div>
                            <div className="newLine">a design web, acting in harmony from the outside</div>
                        </div>
                        
                        <div className="arrow"></div>
                    </div>
                </div>

                <div className="yourWrapper">
                    <div id="brand" class="yourTwo">
                        <YourThing
                            topWords="Your brand."
                            bottomWords="Connected."
                            link="/joinus/partner"
                            buttonWords="Join our network"
                            topDescription="Join our network of..."
                            bottomDescription="independently recognized design professionals"
                        />
                    </div>

                    <div id="career" class="yourTwo">
                        <YourThing
                            topWords="Your career."
                            bottomWords="Amplified."
                            link="/joinus/joblist"
                            buttonWords="Join our nucleus"
                            topDescription="Join our nucleus of..."
                            bottomDescription="integrated design professionals"
                        />
                    </div>
                </div>
            </div >
        )
    }
};

export default JoinUs;
