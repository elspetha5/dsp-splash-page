import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

import contents from "../../content.json"

class NavBar extends Component {
    state = {
        contents
    };

    render() {
        return (
            <div id="navbar">
                <Link to="/" className="link" id="banner">
                    <div id="logobox">
                        <div className="logo" id="logo">dsp... under construction</div>
                    </div>
                </Link>

                <div id="navLine"></div>

                <div id="questions">
                    {this.state.contents.map(content => (
                        <Link to={"/" + content.question} className="link question">{content.question}</Link> 
                    ))}
                </div>


            </div>
        )
    };
};

export default NavBar;