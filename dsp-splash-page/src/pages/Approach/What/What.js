import React, { Component } from "react";
import "./what.css";

// Components
import PageTop from "../../../components/PageTop";


class What extends Component {
    state = {
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    render() {
        return (
            <div>

                <div id="whatPic">
                    <PageTop
                        topQ="out-of-office… "
                        thesis="what's that?"
                    />


                </div>

                <div className="topIdea wrapper wordsBox">
                    <div className="topIdeaQ">WHAT</div>
                    <div className="rightWe">
                        <div className="oneRightWe">We're <span className="bold">building an ecosystem</span> of design professionals that kicks butt for our clients</div>
                        <div className="oneRightWe">We're <span className="bold">creating a platform</span> for design services that will lead the industry within 3 years</div>
                        <div className="oneRightWe">We're <span className="bold">disrupting the status quo</span> for design & delivery</div>
                        <div className="oneRightWe">We're <span className="bold">offering a better value</span> for a superior design process</div>
                        <div className="oneRightWe">We're <span className="bold">providing a work-life opportunity</span> that can't be found anywhere else</div>
                    </div>
                </div>

            </div>
        )
    };
};

export default What;