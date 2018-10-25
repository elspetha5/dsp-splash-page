import React, { Component } from "react";
import "./home.css";

import QPage from "../../components/QPage";

import contents from "../../content.json";

class Home extends Component {
    state = {
        contents
    };

    render() {
        return (
            <QPage
            question={this.state.contents[0].question}
            answer={this.state.contents[0].answer}
            />
        )
    };
};

export default Home;