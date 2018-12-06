import React, { Component } from "react";
import "./who.css";

// Components
import PageTop from "../../../components/PageTop";


class Who extends Component {
    state = {
    };

    render() {
        return (
            <div>

                <div id="whoPic">
                    <PageTop
                        topQ="out-of-office... "
                        thesis="who are we?"
                    />
                </div>

                <div className="topIdea wrapper wordsBox">
                    <div className="topIdeaQ">WHO</div>
                    <div className="rightWe">
                        <div className="oneRightWe">We're connectors, navigators, artists and <span className="bold">design thinkers</span></div>
                        <div className="oneRightWe">We're <span className="bold">process scientists</span>… constantly pursuing and adapting to the most effective way forward</div>
                        <div className="oneRightWe">We're integrators, collaborators and <span className="bold">visionaries</span></div>
                        <div className="oneRightWe">We're <span className="bold">entrepreneurs</span>… developing design solutions to our most pressing problems</div>
                        <div className="oneRightWe">We're <span className="bold">digital experts</span>… leading the industry in digital process integration</div>
                        <div className="oneRightWe">We're design service professionals that <span className="bold">recognize what 'service' means</span>… and it's not about us</div>
                        <div className="oneRightWe">We're makers… textile artisans, wood workers, metalsmiths… <span className="bold">lovers of the craft</span></div>
                        <div className="oneRightWe">We're high achievers… <span className="bold">independently motivated</span> and deeply rooted in the process of design</div>
                        <div className="oneRightWe">We're the <span className="bold">next generation</span> of design service professionals</div>
                    </div>
                </div>

            </div>
        )
    };
};

export default Who;