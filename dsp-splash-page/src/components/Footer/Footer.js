import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./footer.css";

class Footer extends Component {
    state = {

    };

    render() {
        return (
            <div id="footer">
                <div className="halfFooter">
                    <Link to="/" className="footerLink">HOME</Link>
                    <Link to="/WHO" className="footerLink">ABOUT</Link>
                    <Link to="/JOINUS" className="footerLink">JOIN US</Link>
                    <div id="copyright"><i class="far fa-copyright"></i> Design Service Professionals, PLLC 2018 All rights reserved</div>
                </div>

                <div className="halfFooter">
                    <div id="needContact">Need to reach us?</div>
                    <div id="email">email: hello@dsp.design</div>
                </div>
            </div>
        )
    };
};

export default Footer;