import React, { Component } from "react";
import "./digital.css"

import "react-table/react-table.css";

class Digital extends Component {
    state = {
        BIMroles: [{
            name: "Studio Director",
            description: "Studio Operations"
        }, {
            name: "Digital Design Director",
            description: "BIM, Visual Design, Computational Design"
        }, {
            name: "Computational Design Leader",
            description: "BIM, Computational Design"
        }, {
            name: "Visual Design Leader",
            description: "BIM, Visual Design"
        }, {
            name: "BIM Design Leader",
            description: "BIM, Computational Design"
        }, {
            name: "BIM Support Specialist",
            description: "BIM, Revit"
        }, {
            name: "Digital Design Specialist",
            description: "BIM, Visual Design"
        }, {
            name: "Digital Design Manager",
            description: "BIM Specialist"
        }]
    };

    componentDidMount() {
        window.scrollTo(0, 0)
      };

    render() {

        return (
            <div id="digitalWrapper">
                <div className="digitalTitle">dsp.digital</div>

                <div className="digitalWords">An<span className="bold"> all-virtual architectural design studio</span> that operates as a research and design team, cross-pollinating design thinking through all projects and design disciplines. Through rigorous explorations into emerging technologies, methodologies, and architectural typologies, dsp.digital seeks to elevate and implement the most effective modes of architectural design and delivery.</div>
                <div className="digitalWords">A<span className="bold"> studio dedicated to our most complicated BIM projects</span>, engaging all projects with LOD 300 and above. As we build our expertise internally, our services also reach outward to provide <span className="bold">BIM Consulting Services</span> to outside partners.</div>
                <div className="digitalWords">A<span className="bold"> business development differentiator</span>. dsp.digital sets us apart as thought leaders in the digital design realm and helps to feed work into all project types and practice areas.</div>
                <div className="digitalWords">An<span className="bold"> incubator for advancing "Design-Build Done Right"</span>. The foundation for winning the best design-build projects lies in our design & delivery process. By teaming with dsp.digital, design-build partners will gain access to our elite BIM team, reserved for our most complicated design-build jobs. </div>
                <div className="digitalWords">A<span className="bold"> key research, development, and training team for advanced software applications</span>. This team is intended to be non-billable up to 50% of the time, with key initiatives facilitating advanced project work with a direct project impact.</div>
                <div className="digitalWords">A team of <span className="bold">Revit Specialists, Computational Design Specialists,</span> and <span className="bold">Visualization Specialists</span> with a knack for developing simulation quality, interactive and adaptive environments.</div>
                <div className="digitalWords">Doubling as project<span className="bold"> Digital Design Managers</span>, this team also provides ongoing BIM oversight, facilitates effective visualization processes and develops challenging computational design solutions for an array of architectural projects.</div>

                <div id="BIMroles">
                    <div className="row">
                        <div className="BIMHead column one">Role:</div>
                        <div className="BIMHead column two">Emphasis:</div>
                    </div>

                    <div>{this.state.BIMroles.map(role => (
                        <div className="row">
                            <div className="column BIMword one">{role.name}</div>
                            <div className="column BIMword two">{role.description}</div>
                        </div>
                    ))}</div>
                </div>

            </div>
        )
    }
};

export default Digital;