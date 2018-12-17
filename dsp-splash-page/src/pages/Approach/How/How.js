import React, { Component } from "react";
import "./how.css";

// Components
import PageTop from "../../../components/PageTop";


class How extends Component {
    state = {
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

                <div className="topIdea wrapper wordsBox">
                    <div className="topIdeaQ">HOW</div>
                    <div className="rightWe">
                        <div className="oneRightWe">By <span className="bold">leveraging technology</span> to connect, collaborate and create in the cloud</div>
                        <div className="oneRightWe">By assembling <span className="bold">the right teams</span> with the right skills <span className="bold">at the right time</span></div>
                        <div className="oneRightWe">By delivering <span className="bold">high quality</span> design services from <span className="bold">start to finish</span></div>
                        <div className="oneRightWe">By <span className="bold">understanding who we're serving</span> and what they care about most</div>
                        <div className="oneRightWe">By placing our <span className="bold">people at the heart</span> of everything that matters</div>
                        <div className="oneRightWe">By augmenting the best in our partners to <span className="bold">achieve more together</span></div>
                    </div>
                </div>

            </div>
        )
    };
};

export default How;