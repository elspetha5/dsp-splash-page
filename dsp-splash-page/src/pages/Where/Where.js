import React, { Component } from "react";
import "./where.css";

// Components
import LeftIdea from "../../components/LeftIdea";

// Files
import ideas from "../../JSON/what.json"

class Where extends Component {
    state = {
        ideas
    };

    render() {
        return (
            <div>

                <div className="topPic">
                    <div className="wordsBox">
                        <div className="topQ">Where do we create?</div>
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

export default Where;