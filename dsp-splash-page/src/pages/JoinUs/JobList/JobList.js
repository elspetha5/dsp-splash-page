import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Panel } from "react-bootstrap";
import SlantTop from "../../../components/SlantTop";
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

                <SlantTop 
                    color="almostBlack-background"
                    title="dsp.careers"
                />

                <div className="wrapper">

                    {this.state.jobs.map((job, i) => (
                        <div className="ideaBackground">
                            <Panel eventKey={i}>

                                <Panel.Title id="listTitle" className="leftIdea link listTitle" toggle>{job.title}</Panel.Title>

                                <div className="rightVerbiage">
                                    <Panel.Title id="oneLineTitle" className="link" toggle>{job.oneLine}</Panel.Title>


                                    <Panel.Body collapsible>
                                        <div>{job.description}</div>
                                        <Link to={"/joinus/" + job.button} className="applyButton jobButton">see available {job.button} positions</Link >
                                        <Link to={"/joinus/remind"} className="applyButton jobButton">remind me to apply later</Link >
                                    </Panel.Body>

                                </div>
                            </Panel>

                        </div>
                    ))}
                </div>
            </div>
        )
    };
};

export default JobList;