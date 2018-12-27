import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Panel } from "react-bootstrap";
import "./joblist.css";

import PageTop from "../../../components/PageTop";

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
                <div id="joblistPic">
                    <PageTop
                        topQ="Job List"
                    />
                </div>

                <div className="wrapper">
                    {this.state.jobs.map((job, i) => (
                        <div className="ideaBackground">
                            <div id={i} className="leftIdea link listTitle">{job.title}</div>

                            <div className="rightVerbiage">

                                <Panel eventKey={i}>
                                    <Panel.Title id="oneLineTitle" className="link" toggle>{job.oneLine}</Panel.Title>


                                    <Panel.Body collapsible>
                                        <div>{job.description}</div>
                                        <Link to="/joinus/recruit" className="applyButton jobButton">see available {job.button} positions</Link >
                                        {/* <Link to="/joinus/recruit" className="remindButton jobButton">Remind me to apply later</Link > */}
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