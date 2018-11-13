import React, { Component } from "react";
import "./why.css";

// Components
import PageTop from "../../components/PageTop";

// Files
import ideas from "../../JSON/why.json"

class Why extends Component {
    state = {
        ideas
    };

    render() {
        return (
            <div>

                <div id="whyPic">
                    <PageTop
                        topQ="out-of-office... "
                        thesis="why do we care?"
                    />
                </div>

                <div className="topIdea wrapper wordsBox">
                    <div className="topIdeaQ">WHY</div>
                    <div className="rightWe">
                        <div className="oneRightWe">Because <span className="bold">we FINALLY can</span></div>
                        <div className="oneRightWe">Because we've got the <span className="bold">right tech</span>, the <span className="bold">best talent</span>, and a <span className="bold">game changing</span> approach to design & delivery</div>
                        <div className="oneRightWe">Because there's all kinds of <span className="bold">amazing talent outside</span> the typical design office</div>
                        <div className="oneRightWe">Because design services for AEC partners means <span className="bold">we all thrive</span></div>
                        <div className="oneRightWe">Because we can be <span className="bold">even better 'out of office'</span></div>
                    </div>
                </div>

            </div>
        )
    };
};

export default Why;