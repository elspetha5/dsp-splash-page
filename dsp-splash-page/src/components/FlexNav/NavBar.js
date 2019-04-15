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
                <div id="flexNav" className="lightGrey-background">
                    <div id="flexImage">
                        <img src={logo} alt="logo" id="flexLogo" />
                    </div>

                    <div id="flexWords">
                        <div id="flexQs">
                            {this.state.buttons.map(button => (
                                <Link to={button.to}>{button.text}</Link>
                            ))}
                        </div>

                        <div id="flexFooter">
                            {this.state.footer.map(thing => (
                                <div>{thing}</div>
                            ))}
                        </div>
                    </div>

                </div>

                <img id="constStamp" src={stamp} alt="underConst" />
            </div>
        )
    };
};

export default NavBar;