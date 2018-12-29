import React, { Component } from "react";
import "./projects.css";

class Projects extends Component {
    state = {

    };

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    render() {
        return (
            <div id="yourProjectsStory" class="yourOne">
                <div class="yourThingBackground">
                    <div class="yourThingWrapper">
                        <div class="yourTitleWrapper">
                            <div class="yourThingWords">Your story.</div>
                            <div class="yourThingWords">coming soon...</div>
                        </div>
                        
                        {/* <div classname="yourDescriptionWrapper">
                            <div class="yourTopDescription yourDescription">{props.topDescription}</div>
                            <div class="yourBottomDescription yourDescription">{props.bottomDescription}</div>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
};

export default Projects;