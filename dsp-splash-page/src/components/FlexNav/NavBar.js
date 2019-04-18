import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
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
        footer: ["hello@dsp.design", "Join us", "Design Service Professionals, PLLC 2019 All rights reserved"]
    };



    render() {
        return (
            <div>
                <Navbar collapseOnSelect>
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

                        <div id="flexWords">
                            <Navbar.Collapse>
                                <Nav id="flexQs">
                                    {this.state.buttons.map((button, i) => (
                                        <LinkContainer to={button.to}>
                                            <NavItem eventKey={`${i + 1}`} >{button.text}</NavItem>
                                        </LinkContainer>
                                    ))}
                                </Nav>
                            </Navbar.Collapse>
                        </div>

                        <Navbar.Header id="flexHeader">
                            <Navbar.Toggle id="flexHamburger" />
                        </Navbar.Header>
                        
                    </div>
                </Navbar>


                <img id="constStamp" src={stamp} alt="underConst" />

            </div>
        )
    };
};

export default NavBar;