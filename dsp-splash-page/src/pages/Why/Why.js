import React, { Component } from "react";
import "./why.css";

// Components
import LeftIdea from "../../components/LeftIdea";
import PageTop from "../../components/PageTop";

// Files
import ideas from "../../JSON/what.json"

class Why extends Component {
    state = {
        ideas
    };

    render() {
        return (
            <div>

                <div id="whyPic">
                    <PageTop
                        topQ="Why are we building it?"
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

export default Why;