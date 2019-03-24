import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./navbar.css";

import logo from "./dspLogo.png";
import stamp from "./under-construction-circle.png";

class NavBar extends Component {
    state = {
        approach: ["what", "where", "why", "who", "how"],
        about: ["people", "projects"],
        clients: ["Connect with us", "Log in"],
        designServices: ["interiors", "architecture", /* "communication", */ "digital", /* "brand", */ "service"/* , "industrial" */]
    };



    render() {
        return (
            <Navbar id="navbar" fixedBottom collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/" className="link">
                            <img src={logo} alt="logo" id="logo" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle id="hamburger" />
                </Navbar.Header>
                <Navbar.Collapse >
                    <Nav id="questions">
                        <LinkContainer to="/approach">
                            <NavItem eventKey={"1"} id="white" className="link question mainNav">approach</NavItem>
                        </LinkContainer>

                        {/* <NavDropdown eventKey="1" title="APPROACH" className="link question mainNav" noCaret id="dropdown-no-caret">
                            <LinkContainer to="/approach">
                                <MenuItem eventKey={"4.8"} id="white" className="question dropNav">approach</MenuItem>
                            </LinkContainer>

                            <MenuItem divider />

                            {this.state.approach.map((question, i) => (
                                <LinkContainer to={"/approach/" + question}>
                                    <MenuItem eventKey={"1." + i} id="white" className="question dropNav">{question}</MenuItem>
                                </LinkContainer>
                            ))}
                        </NavDropdown> */}

                        <LinkContainer to="/about/people">
                            <NavItem eventKey={"2"} id="white" className="link question mainNav">about</NavItem>
                        </LinkContainer>

                        {/* <NavDropdown eventKey="2" title="ABOUT" className="link question mainNav" noCaret id="dropdown-no-caret">
                            {this.state.about.map((one, i) => (
                                <LinkContainer to={"/about/" + one}>
                                    <MenuItem eventKey={"2." + i} id="white" className="question dropNav">{one}</MenuItem>
                                </LinkContainer>
                            ))}
                        </NavDropdown> */}

                        <LinkContainer to="/clients">
                            <NavItem eventKey={"3"} id="white" className="link question mainNav">clients</NavItem>
                        </LinkContainer>

                        <LinkContainer to="/designservices">
                            <NavItem eventKey={"4"} id="white" className="link question mainNav">services</NavItem>
                        </LinkContainer>

                        {/* <NavDropdown eventKey="4" title="SERVICES" className="link question mainNav" noCaret id="dropdown-no-caret">
                            <LinkContainer to="/designservices">
                                <MenuItem eventKey={"4.8"} id="white" className="question dropNav">all services</MenuItem>
                            </LinkContainer>

                            <MenuItem divider />

                            {this.state.designServices.map((service, i) => (
                                <LinkContainer to={"/designservices/" + service}>
                                    <MenuItem eventKey={"4." + i} id="white" className="question dropNav">{service}</MenuItem>
                                </LinkContainer>
                            ))}
                        </NavDropdown> */}

                        <LinkContainer to="/joinus">
                            <NavItem eventKey={"5"} id="white" className="link question mainNav">ecosystem</NavItem>
                        </LinkContainer>

                        {/* <NavDropdown eventKey="5" title="ECOSYSTEM" className="link question mainNav" noCaret id="dropdown-no-caret">
                            <LinkContainer to="/joinus">
                                <MenuItem eventKey={"5.1"} id="white" className="question dropNav">your brand</MenuItem>
                            </LinkContainer>

                            <MenuItem divider />

                            <LinkContainer to="/joinus">
                                <MenuItem eventKey={"5.2"} id="white" className="question dropNav">your career</MenuItem>
                            </LinkContainer>
                        </NavDropdown> */}

                        {/* <LinkContainer to="/login">
                            <NavItem eventKey={"6"} id="white" className="link question">LOG IN</NavItem>
                        </LinkContainer */}


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

                {/* <div id="blogButton">Blog</div> */}


            </Navbar>



        )
    };
};

export default NavBar;