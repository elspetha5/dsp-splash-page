import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import Popup from "reactjs-popup";
import LeftIdea from "../../components/LeftIdea";
import "./people.css";

import people from "../../JSON/People/people.json";
import twoPeople from "../../JSON/People/twoPeople.json";
import threePeople from "../../JSON/People/threePeople.json";
import fivePeople from "../../JSON/People/fivePeople.json";

class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people,
            twoPeople,
            threePeople,
            fivePeople,
            department1: "cluster",
            department2: "cluster",
            department3: "cluster"
        };
        this.straightenClusterOne = this.straightenClusterOne.bind(this);
        this.straightenClusterTwo = this.straightenClusterTwo.bind(this);
        this.straightenClusterThree = this.straightenClusterThree.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    straightenClusterOne = () => {
        (this.state.department1 === "cluster") ?
            this.setState({
                department1: "straight"
            })
        :
            this.setState({
                department1: "cluster"
            });
    };

    straightenClusterTwo = () => {
        (this.state.department2 === "cluster") ?
            this.setState({
                department2: "straight"
            })
        :
            this.setState({
                department2: "cluster"
            });
    };

    straightenClusterThree = () => {
        (this.state.department3 === "cluster") ?
            this.setState({
                department3: "straight"
            })
        :
            this.setState({
                department3: "cluster"
            });
    };

    render() {
        return (
            <div id="peopleBackground">
                <div id="peopleTop">
                    <div id="aboutUs">we are . . . design service professionals</div>
                </div>

                <div id="department1" className="clusterTwo" onClick={this.straightenClusterOne}>
                    {this.state.fivePeople.map((person, i) => (
                        <img src={person.picture} alt="person" className={"clusterPic " + this.state.department1 + i} />                        
                    ))}
                </div>

                <div id="department2" className="clusterTwo" onClick={this.straightenClusterTwo}>
                    {this.state.fivePeople.map((person, i) => (
                        <img src={person.picture} alt="person" className={"clusterPic " + this.state.department2 + i} />                        
                    ))}
                </div>

                <div id="department3" className="clusterOne" onClick={this.straightenClusterThree}>
                    {this.state.fivePeople.map((person, i) => (
                        <img src={person.picture} alt="person" className={"clusterPic " + this.state.department3 + i} />                        
                    ))}
                </div>
                
                {/* <div id="peopleWrapper">
                    {this.state.people.map(person => (
                        <Popup
                            trigger={<img src={person.picture} alt="person" className="peoplePic" />}
                            position="right center"
                            closeOnDocumentClick
                            contentStyle={{
                                "border": "none",
                                "border-radius": "2%"
                            }}

                        >
                            <div className="peopleTooltip">
                                <div className="peopleTitle">{person.title} </div>
                                <div className="peopleCred">{person.credentials}</div>
                                <div className="peopleAbout">
                                    {person.about}
                                </div>
                            </div>
                        </Popup>

                    ))}

                </div>

                <div id="peopleWrapper">
                    {this.state.people.map((person, i) => (
                        <Panel eventKey={i} className="inline">
                            <Panel.Title toggle>
                                <img src={person.picture} alt="person" className="peoplePicRound" />
                            </Panel.Title>

                            <Panel.Body collapsible className="peopleExpand">
                                <div className="peopleTooltip">
                                    <div className="peopleTitle">{person.title} </div>
                                    <div className="peopleCred">{person.credentials}</div>
                                    <div className="peopleAbout">
                                        {person.about}
                                    </div>
                                </div>
                            </Panel.Body>
                        </Panel>

                    ))}
                </div>

                <div id="peopleWrapper">
                    <div className="nucleusTitle">Founders</div>
                    <div className="peopleLine"></div>
                    {this.state.twoPeople.map(person => (
                        <Popup
                            trigger={<img src={person.picture} alt="person" className="peoplePic" />}
                            position="right center"
                            closeOnDocumentClick
                            contentStyle={{
                                "border": "none",
                                "border-radius": "2%"
                            }}

                        >
                            <div className="peopleTooltip">
                                <div className="peopleTitle">{person.title} </div>
                                <div className="peopleCred">{person.credentials}</div>
                                <div className="peopleAbout">
                                    {person.about}
                                </div>
                            </div>
                        </Popup>

                    ))}

                    <div className="nucleusTitle">Management</div>
                    <div className="peopleLine"></div>
                    {this.state.threePeople.map((person, i) => (
                        <Panel eventKey={i} className="inline">
                            <Panel.Title toggle>
                                <img src={person.picture} alt="person" className="peoplePicRound" />
                            </Panel.Title>

                            <Panel.Body collapsible className="peopleExpand">
                                <div className="peopleTooltip">
                                    <div className="peopleTitle">{person.title} </div>
                                    <div className="peopleCred">{person.credentials}</div>
                                    <div className="peopleAbout">
                                        {person.about}
                                    </div>
                                </div>
                            </Panel.Body>
                        </Panel>

                    ))}

                    <div className="nucleusTitle">Department</div>
                    <div className="peopleLine"></div>
                    {this.state.fivePeople.map(person => (
                        <Popup
                            trigger={<img src={person.picture} alt="person" className="peoplePic" />}
                            position="right center"
                            closeOnDocumentClick
                            contentStyle={{
                                "border": "none",
                                "border-radius": "2%"
                            }}

                        >
                            <div className="peopleTooltip">
                                <div className="peopleTitle">{person.title} </div>
                                <div className="peopleCred">{person.credentials}</div>
                                <div className="peopleAbout">
                                    {person.about}
                                </div>
                            </div>
                        </Popup>

                    ))}
                </div>

                {this.state.fivePeople.map(person => (
                    <LeftIdea
                        idea={<img src={person.picture} alt="person" className="peopleLeft" />}
                        verbiage={person.about}
                    />
                ))} */}


            </div>
        )
    };
};

export default People;