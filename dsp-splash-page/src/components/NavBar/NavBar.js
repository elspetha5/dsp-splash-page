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
                            {this.state.approach.map((question, i) => (
                                <MenuItem eventKey={"1." + i} as={Link} href={"/approach/" + question}>{/* <Link id="white" className="question" to={"/approach/" + question}> */}{question}{/* </Link> */}</MenuItem>
                            ))}
                        </NavDropdown>

                        <NavItem eventKey={"2"} as={Link} href={"/projects"} >{/* <Link to={"/projects"} id="white" className="link question"> */}PROJECTS{/* </Link> */}</NavItem>

                        {/* <NavDropdown eventKey="2" title="PROJECTS" className="link question" noCaret id="dropdown-no-caret">
                            {this.state.projects.map((project, i) => (
                                <MenuItem eventKey={"2." + i} href={"/projects/" + project}><Link id="white" className="question" to={"/projects/" + project}>{project}</Link></MenuItem>
                            ))}
                        </NavDropdown> */}

                        <NavItem eventKey={"3"} as={Link} href={"/clients"} >{/* <Link to={"/clients"} id="white" className="link question"> */}CLIENTS{/* </Link> */}</NavItem>

                        {/* <NavItem eventKey={"4"} href={"/designservices"}><Link to={"/designservices"} id="white" className="link question">DESIGN SERVICES</Link></NavItem> */}

                        <NavDropdown eventKey="4" title="SERVICES" className="link question" noCaret id="dropdown-no-caret">
                            <MenuItem eventKey={"4.8"} as={Link} href={"/designservices"}>{/* <Link to={"/designservices"} id="white" className="question"> */}all services{/* </Link> */}</MenuItem>
                            
                            <MenuItem divider />

                            {this.state.designServices.map((service, i) => (
                                <MenuItem eventKey={"4." + i} as={Link} href={"/designservices/" + service}>{/* <Link id="white" className="question" to={"/designservices/" + service}> */}{service}{/* </Link> */}</MenuItem>
                            ))}
                        </NavDropdown>

                        {/* <NavItem eventKey={"5"} href={"/joinus"}><Link to={"/joinus"} id="white" className="link question">ECOSYSTEM</Link></NavItem> */}

                        <NavDropdown eventKey="5" title="ECOSYSTEM" className="link question" noCaret id="dropdown-no-caret">
                            <MenuItem eventKey={"5.1"} as={Link} href={"/joinus"}>{/* <Link to={"/joinus"} id="white" className="question"> */}your brand{/* </Link> */}</MenuItem>

                            {/* <MenuItem divider /> */}

                            <MenuItem eventKey={"5.2"} as={Link} href={"/joinus"}>{/* <Link to={"/joinus"} id="white" className="question"> */}your career{/* </Link> */}</MenuItem>
                        </NavDropdown>

                        {/* <NavItem eventKey={"6"} href={"/login"}><Link to={"/login"} id="white" className="link question">LOG IN</Link></NavItem> */}


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