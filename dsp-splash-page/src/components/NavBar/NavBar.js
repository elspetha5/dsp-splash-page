import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

import contents from "../../content.json"
import logo from "./dsp-logo.png";
import logo2 from "./dsp-logo-blue-circle-white.png";
import logo3 from "./dsp-logo-white-circle-teal.png";
import logo4 from "./dsp-logo-blue-circle-white-no-elipsis.png";

class NavBar extends Component {
    state = {
        contents
    };





    render() {
        return (
            <div id="navbar">
                {/* <Link to="/WHAT" className="link" id="banner">
                    <div id="logobox">
                        <img src={logo} alt="logo" id="logo"/>
                        <div id="construction">under construction</div>
                    </div>
                </Link>

                <div id="navLine"></div> */}

                <div id="questions">

                    <Link to="/WHAT" className="link" id="leftLogo">
                        <img src={logo4} alt="logo" id="logo" />
                    </Link>

                    <div id="questionBox">
                        {this.state.contents.map(content => (
                            <Link to={"/" + content.question} className="link question">{content.question}</Link>
                        ))}
                    </div>
                </div>


            </div>
        )
    };
};

export default NavBar;