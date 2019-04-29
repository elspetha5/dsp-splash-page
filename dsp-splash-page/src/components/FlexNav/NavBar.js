import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

import logo from "./dspLogo.png";
import stamp from "./under-construction-circle.png";

const hamline = {
    hamLine1: "hamLineStraight",
    hamLine2: "hamLineStraight",
    hamLine3: "hamLineStraight"
};

class NavBar extends Component {

    state = {
        buttons: [
            { to: "/approach", text: "approach" },
            { to: "/clients", text: "clients" },
            { to: "/designservices", text: "services" },
            { to: "/about/people", text: "about" },
            { to: "/joinus", text: "ecosystem" }
        ],
        footer: ["hello@dsp.design", "Join us", "Design Service Professionals, PLLC 2019 All rights reserved"],
        navVisibility: "navHidden",
        flexQsShow: "",
        hamline,
        navSlant: ""
    };

    hamburger = () => {
        (this.state.hamline.hamLine1 === "hamLineStraight") ?
            this.setState({
                navVisibility: "navShow",
                flexQsShow: "flexQsShow",
                hamline: {
                    hamLine1: "hamX1",
                    hamLine2: "hamLineInvisible",
                    hamLine3: "hamX3"
                },
                navSlant: "navSlantGrow"
            })
            :
            this.setState({
                navVisibility: "navHidden",
                flexQsShow: "",
                hamline: hamline,
                navSlant: "navSlantShrink"
            });
    };



    render() {
        return (
            <div>
                <div id="flexNav" className="lightGrey-background">

                    <div id="flexImage">
                        <Link to="/"><img src={logo} alt="logo" id="flexLogo" /></Link>
                    </div>

                    <div id="flexFooter">
                        <div id="flexFooterWords">
                            <a className="link" id="emailAddress" href="mailto:hello@dsp.design"><i class="far fa-envelope"></i> hello@dsp.design </a>
                            <Link classname="link" id="footerJoin" to="/joinus"><i class="far fa-handshake"></i> Join us</Link>
                            <div id="flexPLLC">Design Service Professionals, PLLC<span id="copyRights"> <i class="far fa-copyright"></i> 2019 <span id="rights">All rights reserved</span></span></div>
                        </div>
                    </div>

                    <div id="flexWords" className={this.state.navVisibility}>
                        <div id={this.state.navSlant} className="yellow-background"></div>
                        {this.state.buttons.map( button => (
                            <Link to={button.to} id={button.text} className={`flexQs ${this.state.flexQsShow}`} onClick={() => {this.hamburger()}}>{button.text}</Link>
                        ))}
                    </div>

                    <div id="flexHamburger" onClick={() => { this.hamburger() }}>
                        <div id={this.state.hamline.hamLine1} className="hamLine charcoalish-background"></div>
                        <div id={this.state.hamline.hamLine2} className="hamLine charcoalish-background"></div>
                        <div id={this.state.hamline.hamLine3} className="hamLine charcoalish-background"></div>
                    </div>

                </div>


                <img id="constStamp" src={stamp} alt="underConst" />

            </div>
        )
    };
};

export default NavBar;