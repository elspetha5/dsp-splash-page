import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class NavBar extends Component {
    state = {
        questions: ["WHO", "WHAT", "WHY", "HOW" ]
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
                    {this.state.questions.map(question => (
                        <Link to={"/" + question} className="link question">{question}</Link> 
                    ))}
                </div>


            </div>
        )
    };
};

export default NavBar;