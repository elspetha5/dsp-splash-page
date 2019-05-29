import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./assets/css/navbar.css";
import "./assets/css/mediaNavbar.css";

import logo from "./assets/images/dspLogo.png";

class NavBar extends Component {

    state = {
        buttons: [
            { to: "/about/people", text: "about", id: "about" },
            { to: "/approach", text: "approach", id: "approach" },
            { to: "/clients", text: "clients", id: "clients" },
            { to: "/designservices", text: "services", id: "services" },
            { to: "/joinus", text: "join us", id: "joinus" }
        ],
        footer: ["hello@dsp.design", "Join us", "Design Service Professionals, PLLC 2019 All rights reserved"],
        navVisibility: "navHidden",
        navQsShow: "",
        footerJoin: "footerJoin",
        hamLine1: "",
        hamLine2: "",
        hamLine3: "",
        navSlant: "navSlant",
        socialScroll: "socialCloseScroll"
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

    socialScroll = () => {
        (this.state.socialScroll === "socialCloseScroll")
            ? this.setState({
                socialScroll: "socialScroll"
            })
            : this.setState({
                socialScroll: "socialCloseScroll"
            })
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
                            <Link to={button.to} id={button.id} className={`navQs ${this.state.navQsShow}`} onClick={() => { this.hamburger() }}>{button.text}</Link>
                        ))}
                    </div>

                    <div id="navFooter" >
                        <a id="emailAddress" className="link" href="mailto:hello@dsp.design" onClick={() => { this.hamburger() }}><i className="far fa-envelope"></i> hello@dsp.design </a>
                        <div id="socialIconWrapper">
                            <a href="https://www.linkedin.com/company/designserviceprofessionalspllc/" className="link socialIcon" target="blank"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://www.instagram.com/__dspdesign/" className="link socialIcon" target="blank"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.facebook.com/dspdesignprof" className="link socialIcon" target="blank"><i className="fab fa-facebook"></i></a>
                            <a href="https://twitter.com/__dspdesign" className="link socialIcon" target="blank"><i className="fab fa-twitter"></i></a>
                        </div>
                        <div id="navPLLC">Design Service Professionals, PLLC <i className="far fa-copyright"></i> 2018-19 All rights reserved</div>
                    </div>

                </div>

                <div id="navHamburger" onClick={() => { this.hamburger() }}>
                    <div id={this.state.hamLine1} className="hamLine charcoalish-background"></div>
                    <div id={this.state.hamLine2} className="hamLine charcoalish-background"></div>
                    <div id={this.state.hamLine3} className="hamLine charcoalish-background"></div>
                </div>

                <div id="navSocialWrapper">
                    <div id="navSocial" className={`charcoalish-text ${this.state.socialScroll}`} onMouseOver={() => { this.socialScroll() }} onMouseOut={() => { this.socialScroll() }}>
                        <a href="https://www.linkedin.com/company/designserviceprofessionalspllc/" target="blank"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://www.instagram.com/__dspdesign/" target="blank"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.facebook.com/dspdesignprof" target="blank"><i className="fab fa-facebook"></i></a>
                        <a href="https://twitter.com/__dspdesign" target="blank"><i className="fab fa-twitter"></i></a>
                        <a href="mailto:hello@dsp.design"><i className="far fa-envelope"></i></a>
                    </div>
                </div>

            </div>
        )
    };
};

export default NavBar;