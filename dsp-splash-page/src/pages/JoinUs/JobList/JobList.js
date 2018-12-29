import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Panel } from "react-bootstrap";
import "./joblist.css";

import jobs from "../../../JSON/joblist.json";

class JobList extends Component {
    state = {
        jobs,
        open: false
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    render() {

        return (
            <div>
                <div className="wrapper">
                    <div className="ideaBackground">
                        <div className="leftIdea"><span id="designThesis">dsp.careers</span></div>
                    </div>

                    {this.state.jobs.map((job, i) => (
                        <div className="ideaBackground">
                            <div id={i} className="leftIdea link listTitle">{job.title}</div>

                            <div className="rightVerbiage">

                                <Panel eventKey={i}>
                                    <Panel.Title id="oneLineTitle" className="link" toggle>{job.oneLine}</Panel.Title>


                                    <Panel.Body collapsible>
                                        <div>{job.description}</div>
                                        <Link to={"/joinus/" + job.button} className="applyButton jobButton">see available {job.button} positions</Link >
                                        <Link to={"/joinus/remind"} className="applyButton jobButton">remind me to apply later</Link >
                                    </Panel.Body>
                                </Panel>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        )
    };
};

export default JobList;