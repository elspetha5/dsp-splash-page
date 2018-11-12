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
                        topQ="out-of-office... "
                        thesis="where?"
                    />
                </div>

                <div className="wrapper">
                    <div id="whereThesis">We're designers well trained in the art and science of 'work'. So where are we?</div>

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