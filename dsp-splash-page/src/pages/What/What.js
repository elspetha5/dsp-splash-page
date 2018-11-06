import React, { Component } from "react";
import "./what.css";

/* import QPage from "../../components/QPage"; */

import contents from "../../content.json";

class What extends Component {
    state = {
        contents
    };

    render() {
        return (
           /*  <QPage
            question={this.state.contents[0].question}
            answer={this.state.contents[0].answer}
            /> */

            <div className="topQ">What are we building?</div>
        )
    };
};

export default What;