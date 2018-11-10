import React, { Component } from "react";
import "./where.css";

// Components
import LeftIdea from "../../components/LeftIdea";
import PageTop from "../../components/PageTop";

// Files
import ideas from "../../JSON/where.json"

class Where extends Component {
    state = {
        ideas
    };

    render() {
        return (
            <div>

                <div id="wherePic">
                    <PageTop
                        topQ="Where"
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

export default Where;