import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

import contents from "../../JSON/content.json"
import logo from "./thumbprint-logo.png";

class NavBar extends Component {
    state = {
        contents
    };



    render() {
        return (
            <div id="navbar">

                <Link to="/" className="link">
                    <img src={logo} alt="logo" id="logo" />
                </Link>

                <div id="questions">

                    <nav className="navbar navbar-expand-lg navbar-light ">

                        <button id="hamburger" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div id="navbarQs" className="navbar-nav">
                                {this.state.contents.map(content => (
                                    <Link to={"/" + content.question} onClick={this.navclick} className="nav-item link question">{content.question}</Link>
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