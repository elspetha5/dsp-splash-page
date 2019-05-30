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
            <div className="slantBackground">

                <SlantTop
                    color="almostBlack-background"
                    title="dsp.careers"
                />

                {this.state.jobs.slice(0, 2).map((job, i) => (
                    <div className="jobWrapper">
                        <Panel eventKey={i}>
                            <Panel.Title id="listTitle" className="almostBlack-text slantTitle link" toggle><span id="listTitleBorder">{job.title}</span></Panel.Title>
                            <div className="slantInfoWrapper almostBlack-text">
                                <Panel.Title id="oneLineTitle" className="infoWords link" toggle>{job.oneLine}</Panel.Title>

                                <Panel.Body collapsible>
                                    <div>{job.description}</div>
                                    <Link to={"/joinus/" + job.button} className="applyButton jobButton">see available {job.button} positions</Link >
                                    <Link to={"/joinus/remind"} className="applyButton jobButton">remind me to apply later</Link >
                                </Panel.Body>
                            </div>
                        </Panel>
                    </div>
                ))}

                <div className="slantUp green-background">
                    <div className="unSkew">
                        {this.state.jobs.slice(2, 4).map((job, i) => (
                            <div className="jobWrapper">
                                <Panel eventKey={i}>
                                    <Panel.Title id="listTitleWhite" className="slateWhite-text slantTitle link" toggle><span id="listTitleWhiteBorder">{job.title}</span></Panel.Title>
                                    <div className="slantInfoWrapper slateWhite-text">
                                        <Panel.Title id="oneLineTitleWhite" className="infoWords link" toggle>{job.oneLine}</Panel.Title>

                                        <Panel.Body collapsible>
                                            <div id="oneLineTitleWhite">{job.description}</div>
                                            <Link to={"/joinus/" + job.button} className="applyButton jobButton">see available {job.button} positions</Link >
                                            <Link to={"/joinus/remind"} className="applyButton jobButton">remind me to apply later</Link >
                                        </Panel.Body>
                                    </div>
                                </Panel>
                            </div>
                        ))}
                    </div>
                </div>

                {this.state.jobs.slice(4, 6).map((job, i) => (
                    <div className="jobWrapper">
                        <Panel eventKey={i}>
                            <Panel.Title id="listTitle" className="almostBlack-text slantTitle link" toggle><span id="listTitleBorder">{job.title}</span></Panel.Title>
                            <div className="slantInfoWrapper almostBlack-text">
                                <Panel.Title id="oneLineTitle" className="infoWords link" toggle>{job.oneLine}</Panel.Title>

                                <Panel.Body collapsible>
                                    <div>{job.description}</div>
                                    <Link to={"/joinus/" + job.button} className="applyButton jobButton">see available {job.button} positions</Link >
                                    <Link to={"/joinus/remind"} className="applyButton jobButton">remind me to apply later</Link >
                                </Panel.Body>
                            </div>
                        </Panel>
                    </div>
                ))}

                <div className="slantDown salmon-background">
                    <div className="unSkewDown">
                        {this.state.jobs.slice(6).map((job, i) => (
                            <div className="jobWrapper">
                                <Panel eventKey={i}>
                                    <Panel.Title id="listTitleWhite" className="slateWhite-text slantTitle link" toggle><span id="listTitleWhiteBorder">{job.title}</span></Panel.Title>
                                    <div className="slantInfoWrapper slateWhite-text">
                                        <Panel.Title id="oneLineTitleWhite" className="infoWords link" toggle>{job.oneLine}</Panel.Title>

                                        <Panel.Body collapsible>
                                            <div id="oneLineTitleWhite">{job.description}</div>
                                            <Link to={"/joinus/" + job.button} className="applyButton jobButton">see available {job.button} positions</Link >
                                            <Link to={"/joinus/remind"} className="applyButton jobButton">remind me to apply later</Link >
                                        </Panel.Body>
                                    </div>
                                </Panel>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        )
    };
};

export default JobList;