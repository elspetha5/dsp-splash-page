import React, { Component } from "react";
import "./how.css";

// Components
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
                        topQ="out-of-office... "
                        thesis="how's it possible?"
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
                    <div className="topIdeaQ">HOW</div>
                    <div className="rightWe">
                        <div >By <span className="bold">leveraging technology</span> to connect, collaborate and create in the cloud</div>
                        <div >By assembling <span className="bold">the right teams</span> with the right skills <span className="bold">at the right time</span></div>
                        <div >By delivering <span className="bold">high quality</span> design services from <span className="bold">start to finish</span></div>
                        <div >By <span className="bold">understanding who we're serving</span> and what they care about most</div>
                        <div >By placing our <span className="bold">people at the heart</span> of everything that matters</div>
                        <div >By augmenting the best in our partners to <span className="bold">achieve more together</span></div>
                    </div>
                </div>

            </div>
        )
    };
};

export default How;