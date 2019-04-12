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
        ]
    };



    render() {
        return (
            <Navbar id="navbar" className="lightGrey-background" fixedBottom collapseOnSelect>

                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/" className="link">
                            <img src={logo} alt="logo" id="logo" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle id="hamburger slateWhite-background" />
                </Navbar.Header>


                <Navbar.Collapse >
                    <Nav id="questions">
                        {this.state.buttons.map((button, i) => (
                            <LinkContainer to={button.to}>
                                <NavItem eventKey={`${i + 1}`} id="white" className="link question mainNav">{button.text}</NavItem>
                            </LinkContainer>
                        ))}
                    </Nav>
                </Navbar.Collapse>


                <div id="navFooter">
                    <span id="emailIcon" className="footerElement">
                        <a className="link" id="emailAddress" href="mailto:hello@dsp.design"><i class="far fa-envelope"></i> hello@dsp.design </a>
                    </span>

                    <span id="footerHands" className="footerElement">
                        <Link classname="link" id="footerJoin" to="/joinus"><i class="far fa-handshake"></i> Join us</Link>
                    </span>

                    <span id="navCopyright" className="footerElement">
                        Design Service Professionals, PLLC
                            <span id="copyRights"> <i class="far fa-copyright"></i> 2019 <span id="rights">All rights reserved</span></span>
                    </span>
                </div>

                <img id="constStamp" src={stamp} alt="underConst" />

                {/* <div id="blogButton" className="slateWhite-background">Blog</div> */}


            </Navbar>



        )
    };
};

export default NavBar;