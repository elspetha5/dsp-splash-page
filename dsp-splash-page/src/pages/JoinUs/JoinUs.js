import React, { Component } from "react";
import YourThing from "../../components/YourThing";
import Popup from "reactjs-popup";
import "./assets/css/joinus.css";
import "./assets/css/mediaJoinus.css";

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
                            <div className="close" onClick={close}>&times;</div>

                            <div id="joinUsTopPic">
                                <div id="joinUsTitle" className="topQ nightBlue-text">TWO ENTITIES...
                                    <span id="oneEcosystem"> ONE ECOSYSTEM</span>
                                </div>

                                <div id="joinUsThesisWrapper">
                                    <div className="joinUsInfo nightBlue-text">
                                        <div className="joinUsInfoWords">
                                            <div className="bold entityTitle">objective</div>
                                            <div>enable a mode of design that elevates the best in all of us</div>
                                        </div>

                                        <div className="rightArrow"><i className="fas fa-angle-right"></i></div>
                                    </div>

                                    <div className="joinUsInfo nightBlue-text">
                                        <div className="joinUsInfoWords">
                                            <div className="bold entityTitle">strategy</div>
                                            <div>a design ecosystem comprised of two entities</div>
                                        </div>

                                        <div className="rightArrow"><i id="arrowHide" className="fas fa-angle-right"></i></div>
                                    </div>

                                    <div className="joinUsInfo nightBlue-text">
                                        <div className="colon" id="numOne">1</div>

                                        <div className="joinUsInfoWords">
                                            <div className="bold entityTitle">dsp.network</div>
                                            <div>a design web, acting in harmony from the outside</div>
                                        </div>
                                    </div>

                                    <div className="joinUsInfo nightBlue-text">
                                        <div className="colon" id="numTwo">2</div>

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
                    <div id="brand" className="yourTwo">
                        <YourThing
                            topWords="Your brand."
                            bottomWords="Connected."
                            link="/joinus/partner"
                            buttonWords="Join our network"
                            topDescription="Join our network of..."
                            bottomDescription="independently recognized design professionals"
                        />
                    </div>

                    <div id="career" className="yourTwo">
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
