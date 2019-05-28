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

                {this.state.jobs.map((job, i) => (
                    (i < 2)
                        ? <div className="jobWrapper">
                            <Panel eventKey={i}>
                                <Panel.Title id="listTitle" className="almostBlack-text slantTitle link" toggle><span className="listTitleBorder">{job.title}</span></Panel.Title>
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
                        : <div></div>
                ))}

                <div className="slantUp green-background">
                    <div className="unSkew">
                        {this.state.jobs.map((job, i) => (
                            (i === 2 || i === 3)
                                ? <div className="jobWrapper">
                                    <Panel eventKey={i}>
                                        <Panel.Title id="listTitleWhite" className="slateWhite-text slantTitle link" toggle><span className="listTitleWhiteBorder">{job.title}</span></Panel.Title>
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
                                : <div></div>
                        ))}
                    </div>
                </div>

                {this.state.jobs.map((job, i) => (
                    (i === 4 || i === 5)
                        ? <div className="jobWrapper">
                            <Panel eventKey={i}>
                                <Panel.Title id="listTitle" className="almostBlack-text slantTitle link" toggle><span className="listTitleBorder">{job.title}</span></Panel.Title>
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
                        : <div></div>
                ))}

                <div className="slantDown salmon-background">
                    <div className="unSkewDown">
                        {this.state.jobs.map((job, i) => (
                            (i === 6 || i === 7 || i === 8)
                                ? <div className="jobWrapper">
                                    <Panel eventKey={i}>
                                        <Panel.Title id="listTitleWhite" className="slateWhite-text slantTitle link" toggle><span className="listTitleWhiteBorder">{job.title}</span></Panel.Title>
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
                                : <div></div>
                        ))}
                    </div>
                </div>

            </div>
        )
    };
};

export default JobList;