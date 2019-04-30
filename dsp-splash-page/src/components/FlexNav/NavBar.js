import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

import logo from "./dspLogo.png";
import stamp from "./under-construction-circle.png";

class NavBar extends Component {

    state = {
        buttons: [
            { to: "/approach", text: "approach" },
            { to: "/about/people", text: "about" },
            { to: "/clients", text: "clients" },
            { to: "/designservices", text: "services" },
            { to: "/joinus", text: "ecosystem" }
        ],
        footer: ["hello@dsp.design", "Join us", "Design Service Professionals, PLLC 2019 All rights reserved"],
        navVisibility: "navHidden",
        flexQsShow: "",
        footerJoin: "",
        hamLine1: "",
        hamLine2: "",
        hamLine3: "",
        navSlant: ""
    };

    hamburger = () => {
        (this.state.hamLine1 === "" || this.state.hamLine1 === "ham-1") ?
            this.setState({
                navVisibility: "navShow",
                flexQsShow: "flexQsShow",
                footerJoin: "footerJoinShow",
                hamLine1: "hamX1",
                hamLine2: "hamLineInvisible",
                hamLine3: "hamX3",
                navSlant: "navSlantGrow"
            })
            :
            this.setState({
                navVisibility: "navHide",
                flexQsShow: "flexQsHide",
                footerJoin: "footerJoinHide",
                hamLine1: "ham-1",
                hamLine2: "ham-2",
                hamLine3: "ham-3",
                navSlant: "navSlantShrink"
            });
    };

    logoClick = () => {
        if (this.state.hamLine1 === "hamX1") {
            this.hamburger();
        }
    }


    render() {
        return (
            <div>
                <div id="flexNav" className="lightGrey-background">

                    <div id="flexImage">
                        <Link to="/" onClick={() => { this.logoClick() }}><img src={logo} alt="logo" id="flexLogo" /></Link>
                    </div>

                    <div id="flexNavCenter">
                        <div id="flexWords" className={this.state.navVisibility}>
                            <div id={this.state.navSlant} className="yellow-background"></div>
                            {this.state.buttons.map(button => (
                                <Link to={button.to} id={button.text} className={`flexQs ${this.state.flexQsShow}`} onClick={() => { this.hamburger() }}>{button.text}</Link>
                            ))}
                        </div>

                        <div id="flexFooter" className={this.state.navVisibility}>
                            <a id="emailAddress" className={`link ${this.state.flexQsShow}`} href="mailto:hello@dsp.design" onClick={() => { this.hamburger() }}><i class="far fa-envelope"></i> hello@dsp.design </a>
                            <Link to="/joinus" id={this.state.footerJoin} classname={`link ${this.state.flexQsShow}`} onClick={() => { this.hamburger() }}><i class="far fa-handshake"></i> Join us</Link>
                            <div id="flexPLLC">Design Service Professionals, PLLC<span id="copyRights"> <i class="far fa-copyright"></i> 2019 <span id="rights">All rights reserved</span></span></div>
                        </div>
                    </div>

                    <div id="flexHamburger" onClick={() => { this.hamburger() }}>
                        <div id={this.state.hamLine1} className="hamLine charcoalish-background"></div>
                        <div id={this.state.hamLine2} className="hamLine charcoalish-background"></div>
                        <div id={this.state.hamLine3} className="hamLine charcoalish-background"></div>
                    </div>

                </div>


                <img id="constStamp" src={stamp} alt="underConst" />

            </div>
        )
    };
};

export default NavBar;