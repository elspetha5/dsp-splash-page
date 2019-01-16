import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./navbar.css";

import logo from "./Thumbprint-Logo-Left.png";
import stamp from "./under-construction-circle.png";

class NavBar extends Component {
    state = {
        approach: ["what", "where", "why", "who", "how"],
        projects: ["residential", "commercial-office", "hospitality"],
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
                        <NavDropdown eventKey="1" title="APPROACH" className="link question" noCaret id="dropdown-no-caret">
                            <LinkContainer to="/approach">
                                <MenuItem eventKey={"4.8"} id="white" className="question">approach</MenuItem>
                            </LinkContainer>

                            <MenuItem divider />

                            {this.state.approach.map((question, i) => (
                                <LinkContainer to={"/approach/" + question}>
                                    <MenuItem eventKey={"1." + i} id="white" className="question">{question}</MenuItem>
                                </LinkContainer>
                            ))}
                        </NavDropdown>

                        <LinkContainer to="/projects">
                            <NavItem eventKey={"2"} id="white" className="link question">PROJECTS</NavItem>
                        </LinkContainer>

                        {/* <NavDropdown eventKey="2" title="PROJECTS" className="link question" noCaret id="dropdown-no-caret">
                            {this.state.projects.map((project, i) => (
                                <LinkContainer to={"/projects/" + project}>
                                    <MenuItem eventKey={"2." + i} id="white" className="question">{project}</MenuItem>
                                </LinkContainer>
                            ))}
                        </NavDropdown> */}

                        <LinkContainer to="/clients">
                            <NavItem eventKey={"3"} id="white" className="link question">CLIENTS</NavItem>
                        </LinkContainer>

                        <NavDropdown eventKey="4" title="SERVICES" className="link question" noCaret id="dropdown-no-caret">
                            <LinkContainer to="/designservices">
                                <MenuItem eventKey={"4.8"} id="white" className="question">all services</MenuItem>
                            </LinkContainer>

                            <MenuItem divider />

                            {this.state.designServices.map((service, i) => (
                                <LinkContainer to={"/designservices/" + service}>
                                    <MenuItem eventKey={"4." + i} id="white" className="question">{service}</MenuItem>
                                </LinkContainer>
                            ))}
                        </NavDropdown>

                        {/* <LinkContainer to="/joinus">
                            <NavItem eventKey={"5"} id="white" className="link question">ECOSYSTEM</NavItem>
                        </LinkContainer */}

                        <NavDropdown eventKey="5" title="ECOSYSTEM" className="link question" noCaret id="dropdown-no-caret">
                            <LinkContainer to="/joinus">
                                <MenuItem eventKey={"5.1"} id="white" className="question">your brand</MenuItem>
                            </LinkContainer>

                            {/* <MenuItem divider /> */}

                            <LinkContainer to="/joinus">
                                <MenuItem eventKey={"5.2"} id="white" className="question">your career</MenuItem>
                            </LinkContainer>
                        </NavDropdown>

                        {/* <LinkContainer to="/login">
                            <NavItem eventKey={"6"} id="white" className="link question">LOG IN</NavItem>
                        </LinkContainer */}


                    </Nav>
                </Navbar.Collapse>

                <div id="navFooter">
                    <div className="halfNavFooter">
                        <div id="needContact">
                            <span id="emailIcon">
                                <a className="link" id="emailAddress" href="mailto:hello@dsp.design"><i class="far fa-envelope"></i> hello@dsp.design </a>
                            </span>

                            <span id="footerHands">
                                <a classname="link" id="footerJoin" href="/joinus"><i class="far fa-handshake"></i> Join us</a>
                            </span>
                        </div>
                    </div>

                    <div className="halfNavFooter">
                        <div id="navCopyright"><i class="far fa-copyright"></i> 2018 <span id="pllc">Design Service Professionals, PLLC </span><span id="rights">All rights reserved</span></div>
                    </div>
                </div>

                <img id="constStamp" src={stamp} alt="underConst" />


            </Navbar>



        )
    };
};

export default NavBar;