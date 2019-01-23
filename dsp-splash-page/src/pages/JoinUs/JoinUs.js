import React, { Component } from "react";
import YourThing from "../../components/YourThing";
import Popup from "reactjs-popup";
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

                <Popup
                    open={true}
                    modal
                    closeOnDocumentClick
                    lockScroll={true}
                    position='top center'
                    contentStyle={{
                        borderRadius: "5px",
                        border: "none",
                        padding: "20px",
                        backgroundColor: "#f4f7fcde",
                        width: "60vw"
                    }}
                >
                    {close => (
                        <div>
                            <a className="close" onClick={close}>&times;</a>

                            <div id="joinUsTopPic">
                                <div id="joinUsTitle" className="topQ">TWO ENTITIES...
                                    <span id="oneEcosystem"> ONE ECOSYSTEM</span>
                                </div>

                                <div id="joinUsThesisWrapper">
                                    <div className="joinUsInfo">
                                        <div className="joinUsInfoWords">
                                            <div className="bold entityTitle">objective</div>
                                            <div>enable a mode of design that elevates the best in all of us</div>
                                        </div>

                                        <div className="rightArrow"><i class="fas fa-angle-right"></i></div>
                                    </div>

                                    <div className="joinUsInfo">
                                        <div className="joinUsInfoWords">
                                            <div className="bold entityTitle">strategy</div>
                                            <div>a design ecosystem comprised of two entities</div>
                                        </div>

                                        <div className="rightArrow"><i id="arrowHide" class="fas fa-angle-right"></i></div>
                                    </div>

                                    <div className="joinUsInfo">
                                        <div className="colon" id="numOne">1</div>

                                        <div className="joinUsInfoWords">
                                            <div className="bold entityTitle">dsp.network</div>
                                            <div>a design web, acting in harmony from the outside</div>
                                        </div>
                                    </div>

                                    <div className="joinUsInfo">
                                        <div className="colon">2</div>

                                        <div className="joinUsInfoWords">
                                            <div className="bold entityTitle">dsp.nucleus</div>
                                            <div>an all-virtual design pulse, beating from <span className="newLine">the inside</span></div>
                                        </div>
                                    </div>

                                    <button id="closeModal" className="" onClick={() => { close() }}>enter ecosystem</button>
                                </div>

                            </div>


                        </div>
                    )}
                </Popup>




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
