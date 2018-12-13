import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from "react-bootstrap";
import "./navbar.css";

import logo from "./dsp-in-thumbprint.png";

class NavBar extends Component {
    state = {
        approach: ["What", "Where", "Why", "Who", "How"/* , "dsp.digital", "CONTACT" */],
        projects: ["Residential", "Commercial/Office", "Workplace"],
        clients: ["Connect with us", "Log in"],
        designServices: ["All", "Interior", "Architectural", "Graphic", "VR/AR", "Brand", "Service", "Industrial", "Product", "Game"]
    };



    render() {
        return (
            <Navbar id="navbar" fixedTop collapseOnSelect>
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
                                <MenuItem eventKey={"1." + i} href={"/approach/" + question}><Link id="white" className="question" to={"/approach/" + question}>{question}</Link></MenuItem>
                            ))}
                        </NavDropdown>

                        <NavDropdown eventKey="2" title="PROJECTS" className="link question" noCaret id="dropdown-no-caret">
                            {this.state.projects.map((project, i) => (
                                <MenuItem eventKey={"2." + i} href={"/" + project}><Link id="white" className="question" to={"/" + project}>{project}</Link></MenuItem>
                            ))}
                        </NavDropdown>

                        <NavItem eventKey={"3"} href={"/clients"} ><Link to={"/clients"} id="white" className="link question">CLIENTS</Link></NavItem>

                        <NavItem eventKey={"4"} href={"/designservices"}><Link to={"/designservices"} id="white" className="link question">DESIGN SERVICES</Link></NavItem>

                        {/* <NavDropdown eventKey="4" title="DESIGN SERVICES" className="link question" noCaret id="dropdown-no-caret">
                            {this.state.designServices.map((service, i) => (
                                <MenuItem eventKey={"4." + i} href={"/designservices/" + service}><Link className="question" to={"/designservices/" + service}>{service}</Link></MenuItem>
                            ))}
                        </NavDropdown> */}

                        <NavItem eventKey={"4"} href={"/joinus"}><Link to={"/joinus"} id="white" className="link question">JOIN US</Link></NavItem>

                        <NavItem eventKey={"4"} href={"/login"}><Link to={"/login"} id="white" className="link question">LOG IN</Link></NavItem>


                    </Nav>
                </Navbar.Collapse>


            </Navbar>



        )
    };
};

export default NavBar;