import React, { Component } from "react";
import "./assets/css/projects.css";

class Projects extends Component {
    state = {

    };

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    render() {
        return (
            <div id="yourProjectsStory" className="yourOne">
                <div className="yourThingBackground">
                    <div className="yourTitleWrapper">
                        <div className="yourThingWords charcoalish-text">Your story.</div>
                        <div className="yourThingWords charcoalish-text">coming soon...</div>
                    </div>

                    {/* <div className="yourDescriptionWrapper">
                            <div className="yourTopDescription yourDescription">{props.topDescription}</div>
                            <div className="yourBottomDescription yourDescription">{props.bottomDescription}</div>
                        </div> */}

                </div>
            </div>
        )
    }
};

export default Projects;