import React, { Component } from "react";
import "./who.css";

// Components
import LeftIdea from "../../components/LeftIdea";
import PageTop from "../../components/PageTop";

// Files
import ideas from "../../JSON/who.json"

class Who extends Component {
    state = {
        ideas
    };

    render() {
        return (
            <div>

                <div id="whoPic">
                    <PageTop
                        topQ="Who"
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

export default Who;