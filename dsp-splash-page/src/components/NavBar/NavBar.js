import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./assets/css/navbar.css";
import "./assets/css/mediaNavbar.css";

import logo from "./assets/images/dspLogo.png";

class NavBar extends Component {

    state = {
        buttons: [
            { to: "/about/people", text: "about" },
            { to: "/approach", text: "approach" },
            { to: "/clients", text: "clients" },
            { to: "/designservices", text: "services" },
            { to: "/joinus", text: "ecosystem" }
        ],
        footer: ["hello@dsp.design", "Join us", "Design Service Professionals, PLLC 2019 All rights reserved"],
        navVisibility: "navHidden",
        navQsShow: "",
        footerJoin: "footerJoin",
        hamLine1: "",
        hamLine2: "",
        hamLine3: "",
        navSlant: "navSlant"
    };

    hamburger = () => {
        (this.state.hamLine1 === "" || this.state.hamLine1 === "ham-1") ?
            this.setState({
                navVisibility: "navShow",
                navQsShow: "navQsShow",
                footerJoin: "footerJoinShow",
                hamLine1: "hamX1",
                hamLine2: "hamLineInvisible",
                hamLine3: "hamX3",
                navSlant: "navSlantGrow"
            })
            :
            this.setState({
                navVisibility: "navHide",
                navQsShow: "navQsHide",
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
            <div id="nav" className="lightGrey-background">

                <div id="navImage">
                    <Link to="/" onClick={() => { this.logoClick() }}><img src={logo} alt="logo" id="navLogo" /></Link>
                </div>

                <div id="navCenter">

                    <div id="navWords" className={this.state.navVisibility}>
                        <div id={this.state.navSlant} className="skyBlue-background"></div>
                        {this.state.buttons.map(button => (
                            <Link to={button.to} id={button.text} className={`navQs ${this.state.navQsShow}`} onClick={() => { this.hamburger() }}>{button.text}</Link>
                        ))}
                    </div>

                    <div id="navFooter" className={this.state.navVisibility}>
                        <div id="navFooterWords">
                            <a id="emailAddress" className={`link ${this.state.navQsShow}`} href="mailto:hello@dsp.design" onClick={() => { this.hamburger() }}><i className="far fa-envelope"></i> hello@dsp.design </a>
                            <Link to="/joinus" id={this.state.footerJoin} className={`link ${this.state.navQsShow}`} onClick={() => { this.hamburger() }}><i className="far fa-handshake"></i> Join us</Link>
                            <div id="navPLLC">Design Service Professionals, PLLC<span id="copyRights"> <i className="far fa-copyright"></i> 2018-19 <span id="rights">All rights reserved</span></span></div>
                        </div>
                    </div>

                </div>

                <div id="navHamburger" onClick={() => { this.hamburger() }}>
                    <div id={this.state.hamLine1} className="hamLine charcoalish-background"></div>
                    <div id={this.state.hamLine2} className="hamLine charcoalish-background"></div>
                    <div id={this.state.hamLine3} className="hamLine charcoalish-background"></div>
                </div>

                <div id="navSocial" className="charcoalish-text">
                    <div><i className="fab fa-instagram"></i></div>
                    <div><i className="fab fa-facebook"></i></div>
                    <div><i className="fab fa-linkedin-in"></i></div>
                    <div><i className="fab fa-twitter"></i></div>
                </div>

            </div>
        )
    };
};

export default NavBar;