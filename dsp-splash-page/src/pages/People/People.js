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
            department3: "cluster",
            visibility1: "visible",
            visibility2: "visible",
            visibility3: "visible",
            depVisibility: "visible"
        };
        this.straightenClusterOne = this.straightenClusterOne.bind(this);
        this.straightenClusterTwo = this.straightenClusterTwo.bind(this);
        this.straightenClusterThree = this.straightenClusterThree.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    straightenClusterOne = () => {
        (this.state.department1 === "cluster")
            ?
            this.setState({
                department1: "open",
                visibility1: "visible",
                visibility2: "invisible",
                visibility3: "invisible",
                department2: "cluster",
                department3: "cluster",
                depVisibility: "invisible"
            })
            :
            this.setState({
                department1: "cluster",
                visibility2: "visible",
                visibility3: "visible",
                depVisibility: "visible"
            });
    };

    straightenClusterTwo = () => {
        (this.state.department2 === "cluster")
            ?
            this.setState({
                department2: "open",
                visibility1: "invisible",
                visibility2: "visible",
                visibility3: "invisible",
                department1: "cluster",
                department3: "cluster",
                depVisibility: "invisible"
            })
            :
            this.setState({
                department2: "cluster",
                visibility1: "visible",
                visibility3: "visible",
                depVisibility: "visible"
            });
    };

    straightenClusterThree = () => {
        (this.state.department3 === "cluster")
            ?
            this.setState({
                department3: "open",
                visibility1: "invisible",
                visibility2: "invisible",
                visibility3: "visible",
                department1: "cluster",
                department2: "cluster",
                depVisibility: "invisible"
            })
            :
            this.setState({
                department3: "cluster",
                visibility1: "visible",
                visibility2: "visible",
                depVisibility: "visible"
            });
    };

    render() {
        return (
            <div id="peopleBackground">
                <div id="peopleTop">
                    <div id="aboutUs">we are . . . design service professionals</div>
                </div>

                <div id={this.state.department1} className={`clusterOne ${this.state.visibility1}`} onClick={this.straightenClusterOne}>
                    <div className={`depTitle ${this.state.depVisibility}`}>Department 1</div>
                    {this.state.fivePeople.map((person, i) => (
                        <img src={person.picture} alt="person" className={`clusterPic ${this.state.department1 + i}`} />
                    ))}
                    {this.state.people.map(person => (
                        <img src={person.picture} alt="person" className={`clusterPic hiddenPic`} />
                    ))}

                </div>

                <div id={this.state.department2} className={`clusterTwo ${this.state.visibility2}`} onClick={this.straightenClusterTwo}>
                    <div className={`depTitle ${this.state.depVisibility}`}>Department 2</div>
                    {this.state.fivePeople.map((person, i) => (
                        <img src={person.picture} alt="person" className={`clusterPic ${this.state.department2 + i}`} />
                    ))}
                    {this.state.people.map(person => (
                        <img src={person.picture} alt="person" className={`clusterPic hiddenPic`} />
                    ))}
                </div>

                <div id={this.state.department3} className={`clusterThree ${this.state.visibility3}`} onClick={this.straightenClusterThree}>
                    <div className={`depTitle ${this.state.depVisibility}`}>Department 3</div>
                    {this.state.fivePeople.map((person, i) => (
                        <img src={person.picture} alt="person" className={`clusterPic ${this.state.department3 + i}`} />
                    ))}
                    {this.state.people.map(person => (
                        <img src={person.picture} alt="person" className={`clusterPic hiddenPic`} />
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