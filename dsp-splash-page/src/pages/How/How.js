import React, { Component } from "react";
import "./how.css";

// Components
import LeftIdea from "../../components/LeftIdea";
import PageTop from "../../components/PageTop";

// Files
import ideas from "../../JSON/how.json"

class How extends Component {
    state = {
        ideas
    };

    render() {
        return (
            <div>

                <div id="howPic">
                    <PageTop
                        topQ="How"
                        thesis=""
                    />
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