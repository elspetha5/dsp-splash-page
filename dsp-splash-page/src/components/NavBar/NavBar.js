import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from "react-bootstrap";
import "./navbar.css";

import logo from "./Thumbprint-Logo-Left.png";
import stamp from "./under-construction-circle.png";

class NavBar extends Component {
    state = {
        approach: ["what", "where", "why", "who", "how"],
        projects: ["residential", "commercial-office", "hospitality"],
        clients: ["Connect with us", "Log in"],
        designServices: ["interior", "architectural", /* "communication", */ "digital", /* "brand", */ "service"/* , "industrial" */]
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
                            {this.state.approach.map((question, i) => (
                                <MenuItem eventKey={"1." + i} href={"/approach/" + question} id="white" className="question">{question}</MenuItem>
                            ))}
                        </NavDropdown>

                        <NavItem eventKey={"2"} href={"/projects"}  id="white" className="link question">PROJECTS</NavItem>

                        {/* <NavDropdown eventKey="2" title="PROJECTS" className="link question" noCaret id="dropdown-no-caret">
                            {this.state.projects.map((project, i) => (
                                <MenuItem eventKey={"2." + i} href={"/projects/" + project}  id="white" className="question">{project}</MenuItem>
                            ))}
                        </NavDropdown> */}

                        <NavItem eventKey={"3"} href={"/clients"} id="white" className="link question" >CLIENTS</NavItem>

                        {/* <NavItem eventKey={"4"} href={"/designservices"}  id="white" className="link question">DESIGN SERVICES</NavItem> */}

                        <NavDropdown eventKey="4" title="DESIGN SERVICES" className="link question" noCaret id="dropdown-no-caret">
                            <MenuItem eventKey={"4.8"} href={"/designservices"} id="white" className="question">all services</MenuItem>
                            <MenuItem divider />

                            {this.state.designServices.map((service, i) => (
                                <MenuItem eventKey={"4." + i} href={"/designservices/" + service} id="white" className="question">{service}</MenuItem>
                            ))}
                        </NavDropdown>

                        <NavItem eventKey={"5"} href={"/joinus"} id="white" className="link question">JOIN US</NavItem>

                        {/* <NavItem eventKey={"6"} href={"/login"} id="white" className="link question">LOG IN</NavItem> */}


                    </Nav>
                </Navbar.Collapse>

                <div id="navFooter">
                    <div className="halfNavFooter">
                        <div id="needContact">Need to reach us? <span id="emailIcon"><i class="far fa-envelope"></i> <a className="link" id="emailAddress" href="mailto:hello@dsp.design">hello@dsp.design</a></span></div>
                    </div>

                    <div className="halfNavFooter">
                        <div id="navCopyright"><i class="far fa-copyright"></i> Design Service Professionals, PLLC 2018 <span id="rights">All rights reserved</span></div>
                    </div>
                </div>

                <img id="constStamp" src={stamp} alt="underConst" />


            </Navbar>



        )
    };
};

export default NavBar;