import React, { Component } from "react";
import "./login.css";

import thumbprint from "./thumbprint-only.png"

class Login extends Component {
    state = {

    };

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    render() {
        return (
            <div>

                <div id="homeAnimation">

                    <div id="animLines">
                        <div id="leftLine"></div>
                        <div id="rightLine"></div>
                    </div>

                    <img src={thumbprint} id="animThumb" alt="thumbprint"></img>

                    <div id="sectDot"></div>
                </div>

            </div>
        )
    };
};

export default Login;