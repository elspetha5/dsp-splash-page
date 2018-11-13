import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "./navbar.css";

import logo from "./thumbprint-logo.png";

class NavBar extends Component {
    state = {
        contents: ["WHAT", "WHERE", "WHY", "WHO", "HOW", "dsp.digital", "CONTACT"]
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
                        {this.state.contents.map((content, i) => (
                            <NavItem id="question" eventKey={i} href={"/" + content}>{content}</NavItem>
                        ))}
                    </Nav>
                </Navbar.Collapse>

            {/* <div id="global">
                    <div className="funText">Global design.</div>
                    <div className="funText">Locals wanted.</div>
            </div> */}


            </Navbar>



        )
    };
};

export default NavBar;