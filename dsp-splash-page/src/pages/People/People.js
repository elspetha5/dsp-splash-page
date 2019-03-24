import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import Popup from "reactjs-popup";
import LeftIdea from "../../components/LeftIdea";
import "./people.css";

import people from "../../JSON/People/people.json";

class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people,

            backButton: "backNoDisplay",

            peopleThree1: "peopleAsThree",
            peopleThree2: "peopleAsThree",
            peopleThree3: "peopleAsThree",

            department1: "cluster",
            department2: "cluster",
            department3: "cluster",

            visibility1: "visible",
            visibility2: "visible",
            visibility3: "visible",

            depVisibility: "visible",
            hiddenPic: "hiddenPic"
        };
        this.straightenClusterOne = this.straightenClusterOne.bind(this);
        this.straightenClusterTwo = this.straightenClusterTwo.bind(this);
        this.straightenClusterThree = this.straightenClusterThree.bind(this);
        this.back = this.back.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    back = () => {
        this.setState({
            backButton: "backNoDisplay",

            peopleThree1: "peopleAsThree",
            peopleThree2: "peopleAsThree",
            peopleThree3: "peopleAsThree",

            department1: "cluster",
            department2: "cluster",
            department3: "cluster",

            visibility1: "visible",
            visibility2: "visible",
            visibility3: "visible",

            depVisibility: "visible",
            hiddenPic: "hiddenPic"
        });
    };

    straightenClusterOne = () => {
        if (this.state.department1 === "cluster") {
            this.setState({
                department1: "open",

                peopleThree1: "peopleAsOne",
                peopleThree2: "peopleAsNone",
                peopleThree3: "peopleAsNone",

                visibility1: "visible",
                visibility2: "invisible",
                visibility3: "invisible",

                department2: "cluster",
                department3: "cluster",

                depVisibility: "invisible",
                backButton: "backDisplay",
                hiddenPic: "openHiddenPic"
            });
        };

        return;
    };

    straightenClusterTwo = () => {
        if (this.state.department2 === "cluster") {
            this.setState({
                department2: "open",

                peopleThree1: "peopleAsNone",
                peopleThree2: "peopleAsOne",
                peopleThree3: "peopleAsNone",

                visibility1: "invisible",
                visibility2: "visible",
                visibility3: "invisible",

                department1: "cluster",
                department3: "cluster",

                depVisibility: "invisible",
                backButton: "backDisplay",
                hiddenPic: "openHiddenPic"
            });
        };

        return;
    };

    straightenClusterThree = () => {
        if (this.state.department3 === "cluster") {
            this.setState({
                department3: "open",

                peopleThree1: "peopleAsNone",
                peopleThree2: "peopleAsNone",
                peopleThree3: "peopleAsOne",

                visibility1: "invisible",
                visibility2: "invisible",
                visibility3: "visible",

                department1: "cluster",
                department2: "cluster",

                depVisibility: "invisible",
                backButton: "backDisplay",
                hiddenPic: "openHiddenPic"
            });
        };

        return;
    };

    render() {
        return (
            <div id="peopleBackground">
                <div id="peopleTop">
                    <div id="aboutUs">we are . . . design service professionals</div>
                    <a href="#" id={this.state.backButton} className="backToPeople" onClick={this.back}><i class="fas fa-chevron-left"></i> back</a>
                </div>

                <div className={`peopleThree ${this.state.peopleThree1}`} id="peopleThree1">
                    <div id={this.state.department1} className={`peopleFadeIn ${this.state.visibility1}`} onClick={this.straightenClusterOne}>
                        <div className={`depTitle ${this.state.depVisibility}`}>Department 1</div>
                        {this.state.people.map((person, i) => (
                            (i < 5)
                                ?
                                <img src={person.picture} alt="person" className={`clusterPic ${this.state.department1 + i}`} />
                                :
                                <img src={person.picture} alt="person" className={`clusterPic ${this.state.hiddenPic}`} />
                        ))}

                    </div>
                </div>

                <div className={`peopleThree ${this.state.peopleThree2}`} id="peopleThree2">
                    <div id={this.state.department2} className={`peopleFadeIn ${this.state.visibility2}`} onClick={this.straightenClusterTwo}>
                        <div className={`depTitle ${this.state.depVisibility}`}>Department 2</div>
                        {this.state.people.map((person, i) => (
                            (i < 5)
                                ?
                                <img src={person.picture} alt="person" className={`clusterPic ${this.state.department2 + i}`} />
                                :
                                <img src={person.picture} alt="person" className={`clusterPic ${this.state.hiddenPic}`} />
                        ))}
                    </div>
                </div>

                <div className={`peopleThree ${this.state.peopleThree3}`} id="peopleThree3">
                    <div id={this.state.department3} className={`peopleFadeIn ${this.state.visibility3}`} onClick={this.straightenClusterThree}>
                        <div className={`depTitle ${this.state.depVisibility}`}>Department 3</div>
                        {this.state.people.map((person, i) => (
                            (i < 5)
                                ?
                                <img src={person.picture} alt="person" className={`clusterPic ${this.state.department3 + i}`} />
                                :
                                <img src={person.picture} alt="person" className={`clusterPic ${this.state.hiddenPic}`} />
                        ))}
                    </div>
                </div>

                {/* <div id={this.state.department1} className={`clusterOne ${this.state.visibility1}`} onClick={this.straightenClusterOne}>
                    <div className={`depTitle ${this.state.depVisibility}`}>Department 1</div>
                    {this.state.people.map((person, i) => (
                        (i < 5)
                            ?
                                <img src={person.picture} alt="person" className={`clusterPic ${this.state.department1 + i}`} />
                            :
                                <img src={person.picture} alt="person" className={`clusterPic hiddenPic`} />
                    ))}

                </div>


                <div id={this.state.department2} className={`clusterTwo ${this.state.visibility2}`} onClick={this.straightenClusterTwo}>
                    <div className={`depTitle ${this.state.depVisibility}`}>Department 2</div>
                    {this.state.people.map((person, i) => (
                        (i < 5)
                            ?
                                <img src={person.picture} alt="person" className={`clusterPic ${this.state.department2 + i}`} />
                            :
                                <img src={person.picture} alt="person" className={`clusterPic hiddenPic`} />
                    ))}
                </div>


                <div id={this.state.department3} className={`clusterThree ${this.state.visibility3}`} onClick={this.straightenClusterThree}>
                    <div className={`depTitle ${this.state.depVisibility}`}>Department 3</div>
                    {this.state.people.map((person, i) => (
                        (i < 5)
                            ?
                                <img src={person.picture} alt="person" className={`clusterPic ${this.state.department3 + i}`} />
                            :
                                <img src={person.picture} alt="person" className={`clusterPic hiddenPic`} />
                    ))}
                </div> */}

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