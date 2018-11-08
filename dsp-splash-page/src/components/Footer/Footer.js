import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./footer.css";

class Footer extends Component {
    state = {

    };

    render() {
        return (
            <div id="footer">
                <Link to="/" className="footerLink">HOME</Link>
                <Link to="/WHO" className="footerLink">ABOUT</Link>
                <Link to="/CONTACT" className="footerLink">CONTACT</Link>
                <div id="copyright"><i class="far fa-copyright"></i> Design Service Professionals, PLLC 2018 All rights reserved</div>
            </div>
        )
    };
};

export default Footer;