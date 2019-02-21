import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import Popup from "reactjs-popup";
import LeftIdea from "../../components/LeftIdea";
import "./people.css";

import people from "../../JSON/people.json";

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
            personOne: "personOne",
            personTwo: "personTwo",
            personThree: "personThree",
            personFour: "personFour",
            personFive: "personFive"
        };
        this.straighten = this.straighten.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    straighten() {
        (this.state.personOne === "personOne") ?
            this.setState({
                personOne: "personOneStraight",
                personTwo: "personTwoStraight",
                personThree: "personThreeStraight",
                personFour: "personFourStraight",
                personFive: "personFiveStraight"
            })
        :
            this.setState({
                personOne: "personOne",
                personTwo: "personTwo",
                personThree: "personThree",
                personFour: "personFour",
                personFive: "personFive"
            });
    }

    render() {
        return (
            <div id="peopleBackground">
                <div id="peopleTop">
                    <div id="aboutUs">we are . . . design service professionals</div>
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

                <div className="clusterThree" onClick={this.straighten}>
                    <img src={this.state.people[0].picture} alt="person" className={"clusterPic " + this.state.personOne} />
                    <img src={this.state.people[0].picture} alt="person" className={"clusterPic " + this.state.personTwo} />
                    <img src={this.state.people[0].picture} alt="person" className={"clusterPic " + this.state.personThree} />
                    <img src={this.state.people[0].picture} alt="person" className={"clusterPic " + this.state.personFour} />
                    <img src={this.state.people[0].picture} alt="person" className={"clusterPic " + this.state.personFive} />
                </div>

                <div className="clusterThree" onClick={this.straighten}>
                    <img src={this.state.people[0].picture} alt="person" className={"clusterPic " + this.state.personOne} />
                    <img src={this.state.people[0].picture} alt="person" className={"clusterPic " + this.state.personTwo} />
                    <img src={this.state.people[0].picture} alt="person" className={"clusterPic " + this.state.personThree} />
                    <img src={this.state.people[0].picture} alt="person" className={"clusterPic " + this.state.personFour} />
                    <img src={this.state.people[0].picture} alt="person" className={"clusterPic " + this.state.personFive} />
                </div>

                <div className="clusterThree" onClick={this.straighten}>
                    <img src={this.state.people[0].picture} alt="person" className={"clusterPic " + this.state.personOne} />
                    <img src={this.state.people[0].picture} alt="person" className={"clusterPic " + this.state.personTwo} />
                    <img src={this.state.people[0].picture} alt="person" className={"clusterPic " + this.state.personThree} />
                    <img src={this.state.people[0].picture} alt="person" className={"clusterPic " + this.state.personFour} />
                    <img src={this.state.people[0].picture} alt="person" className={"clusterPic " + this.state.personFive} />
                </div>

            </div>
        )
    };
};

export default People;