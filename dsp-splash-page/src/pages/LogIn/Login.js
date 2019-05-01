import React, { Component } from "react";
import "./login.css";

import DbBanner from "../Clients/DesignBuild/DbBanner";

class Login extends Component {
    state = {

    };

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    render() {
        return (
            <div>
                <DbBanner />
            </div>
        )
    };
};

export default Login;