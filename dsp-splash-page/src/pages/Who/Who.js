import React, { Component } from "react";
import "./who.css";

import QPage from "../../components/QPage";

import contents from "../../content.json";

class Who extends Component {
    state = {
        contents
    };

    render() {
        return (
            <QPage
            question={this.state.contents[1].question}
            answer={this.state.contents[1].answer}
            />
        )
    };
};

export default Who;