import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Panel, Collapse } from "react-bootstrap";
import ExpandText from "react-expand-text";
import "./joblist.css";

import PageTop from "../../../components/PageTop";

import jobs from "../../../JSON/joblist.json";

class JobList extends Component {
    state = {
        jobs,
        open: false
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
                            <a href="#" id={i} className="leftIdea link listTitle">{job.title}</a>

                            <div className="rightVerbiage">
                                {/* <div onClick={() => this.key.Collapse.in=true} key={i} className="link listDescription">{job.oneLine}</div>
                                <Collapse in={false} key={i}>
                                    <div>
                                        <div>{job.description}</div>
                                        <Link to="/" className="applyButton button yourButton">Apply Now</Link >
                                        <Link to="/" className="remindButton button yourButton">Remind me to apply later</Link >
                                    </div>
                                </Collapse>  */}
                                <Panel eventKey={i}>
                                    {/* <Panel.Heading className="link"> */}
                                        <Panel.Title id="oneLineTitle" className="link" toggle>{job.oneLine}</Panel.Title>
                                    {/* </Panel.Heading> */}

                                    <Panel.Body collapsible>
                                        <div>{job.description}</div>
                                        <Link to="/joinus/recruit" className="applyButton jobButton">Apply Now</Link >
                                        <Link to="/joinus/recruit" className="remindButton jobButton">Remind me to apply later</Link >
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