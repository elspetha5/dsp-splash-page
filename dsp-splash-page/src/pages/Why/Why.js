import React, { Component } from "react";
import "./why.css";

import QPage from "../../components/QPage";

import contents from "../../content.json";

class Why extends Component {
    state = {
        contents
    };

    render() {
        return (
            <QPage
            question={this.state.contents[2].question}
            answer={this.state.contents[2].answer}
            />
        )
    };
};

export default Why;