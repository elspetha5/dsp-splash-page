import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

import contents from "../../JSON/content.json"
import logo from "./dsp-logo-blue-circle-white-no-elipsis.png";
import stamp from "./under-construction-circle.png";

class NavBar extends Component {
    state = {
        contents
    };





    render() {
        return (
            <div id="navbar">

            <img id="constStamp" src={stamp} alt="underConst" />

                <div id="questions">

                    <nav className="navbar navbar-expand-lg navbar-light ">

                        <button id="hamburger" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <Link to="/" className="link">
                            <img src={logo} alt="logo" id="logo" />
                        </Link>

                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                {this.state.contents.map(content => (
                                    <Link to={"/" + content.question} className="nav-item link question">{content.question}</Link>
                                ))}
                            </div>
                        </div>

                    </nav>


                </div>



            </div>
        )
    };
};

export default NavBar;