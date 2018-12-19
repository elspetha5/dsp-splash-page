import React, { Component } from "react";
import { Link } from "react-router-dom";
import ExpandText from "react-expand-text";
import "./joblist.css";

import PageTop from "../../../components/PageTop";

import jobs from "../../../JSON/joblist.json";

class JobList extends Component {
    state = {
        jobs
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
                            {/* <a href="#" className="rightVerbiage link listDescription">{job.oneLine}</a> */}
                            <div className="rightVerbiage">
                                <ExpandText
                                    maxLength={60}
                                    className="descriptionText"
                                    text={job.description}
                                />
                                <Link to="/" className="applyButton button yourButton">Apply Now</Link >
                                <Link to="/" className="remindButton button yourButton">Remind me to apply later</Link >
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    };
};

export default JobList;