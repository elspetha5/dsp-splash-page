import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class NavBar extends Component {
    state = {
    };

    render() {
        return (
            <div id="navbar">
                <Link to="/" className="link" id="banner">
                    <div id="logobox">
                        <div className="logo" id="logo">dsp...</div>
                        <div className="logo" id="under">under</div>
                        <div className="logo" id="construction">contruction</div>
                    </div>
                </Link>

                <div id="navLine"></div>

                <div id="questions">
                    <Link to="/what" className="link question">
                        What Are We Building?
                    </Link>
                    <Link to="/who" className="link question">
                        Who Is It For?
                    </Link>
                </div>


            </div>
        )
    };
};

export default NavBar;