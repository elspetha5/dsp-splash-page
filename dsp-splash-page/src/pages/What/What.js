import React, { Component } from "react";
import "./what.css";

// Components
import LeftIdea from "../../components/LeftIdea";
import PageTop from "../../components/PageTop";

// Files
import ideas from "../../JSON/what.json";

class What extends Component {
    state = {
        ideas
    };

    render() {
        return (
            <div>

                <div id="whatPic">
                    <PageTop
                        topQ="out-of-office… what's that?"
                        thesis=""
                    />


                </div>

                {/* <div className="wrapper">
                    {this.state.ideas.map(idea1 => (
                        <LeftIdea
                            idea={idea1.idea}
                            verbiage={idea1.verbiage}
                        />
                    ))}
                </div> */}

                <div className="topIdea wrapper wordsBox">
                    <div className="topIdeaQ">WHAT</div>
                    <div className="rightWe">
                        <div >We're <span className="bold">building an ecosystem</span> of design professionals that kicks butt for our clients</div>
                        <div >We're <span className="bold">creating a platform</span> for design services that will lead the industry within 3 years</div>
                        <div >We're <span className="bold">disrupting the status quo</span> for design & delivery</div>
                        <div >We're <span className="bold">offering a better value</span> for a superior design process</div>
                        <div >We're <span className="bold">providing a work-life opportunity</span> that can't be found anywhere else</div>
                    </div>
                </div>

            </div>
        )
    };
};

export default What;