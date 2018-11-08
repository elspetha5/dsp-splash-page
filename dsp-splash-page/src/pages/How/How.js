import React, { Component } from "react";
import "./how.css";

// Components
import LeftIdea from "../../components/LeftIdea";

// Files
import ideas from "../../JSON/what.json"

class How extends Component {
    state = {
        ideas
    };

    render() {
        return (
            <div>

                <div className="topPic">
                    <div className="wordsBox">
                        <div className="topQ">How are we doing it?</div>
                        <div className="thesis"></div>
                    </div>
                </div>

                <div className="wrapper">
                    {this.state.ideas.map(idea1 => (
                        <LeftIdea
                            idea={idea1.idea}
                            verbiage={idea1.verbiage}
                        />
                    ))}
                </div>

            </div>
        )
    };
};

export default How;