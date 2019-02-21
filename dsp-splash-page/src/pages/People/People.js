import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import Popup from "reactjs-popup";
import "./people.css";

import people from "../../JSON/people.json";

class People extends Component {
    state = {
        people
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    render() {
        return (
            <div id="peopleBackground">
                <div id="peopleTop">
                    <div id="aboutUs">About Us</div>
                </div>

                <div id="peopleWrapper">
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

            </div>
        )
    };
};

export default People;