import React, { Component } from "react";
import { Collapse } from 'react-bootstrap';
import Popup from "reactjs-popup";
import LeftIdea from "../../components/LeftIdea";
import { Link } from "react-router-dom";
import Cluster from "./Cluster";
import "./people.css";

import people from "../../JSON/People/people.json";
import sixPeople from "../../JSON/People/sixPeople.json";

class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people,
            sixPeople,
            pictures: [
                "/peopleImages/amy-sketch.png",
                "/peopleImages/deborah-sketch.png",
                "/peopleImages/devan-sketch.png",
                "/peopleImages/elspeth-sketch.png",
                "/peopleImages/jennifer.png",
                "/peopleImages/stacy-sketch.png",
                "",
                ""
            ],


            // backButton: "backNoDisplay",

            // peopleThree1: "peopleAsThree",
            // peopleThree2: "peopleAsThree",
            // peopleThree3: "peopleAsThree",

            // department1: "cluster",
            // department2: "cluster",
            // department3: "cluster",

            // visibility1: "visible",
            // visibility2: "visible",
            // visibility3: "visible",

            // depVisibility: "visible",
            // hiddenPic: "hiddenPic"
        };
    // this.straightenCluster1 = this.straightenCluster1.bind(this);
    // this.straightenCluster2 = this.straightenCluster2.bind(this);
    // this.straightenCluster3 = this.straightenCluster3.bind(this);
    // this.back = this.back.bind(this);
}

componentDidMount() {
    window.scrollTo(0, 0);
};

shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    };
};

/* back = () => {
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

straightenCluster1 = () => {
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

            // depVisibility: "invisible",
            backButton: "backDisplay",
            hiddenPic: "openHiddenPic"
        });
    };

    return;
};

straightenCluster2 = () => {
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

            // depVisibility: "invisible",
            backButton: "backDisplay",
            hiddenPic: "openHiddenPic"
        });
    };

    return;
};

straightenCluster3 = () => {
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

            // depVisibility: "invisible",
            backButton: "backDisplay",
            hiddenPic: "openHiddenPic"
        });
    };

    return;
}; */

handleMouseOver = (i, pic) => {
    let arr = this.state.pictures.slice();
    arr[i] = pic;
    this.setState({
        pictures: arr
    })
};

handleMouseOut = (i, pic) => {
    let arr = this.state.pictures.slice();
    arr[i] = pic;
    this.setState({
        pictures: arr
    })
};

render() {
    return (
        <div id="peopleBackground">
            <div id="peopleTop">
                <div id="aboutUs">we are . . . <span id="aboutUsBreak">design service professionals</span></div>
                {/* <Link to="#" id={this.state.backButton} className="backToPeople" onClick={this.back}><i class="fas fa-chevron-left"></i> back</Link> */}
            </div>

            <div id="peoplePicBox">
                {this.state.sixPeople.map((person, i) => (
                    <div className="picContainer" >
                        <img src={process.env.PUBLIC_URL + this.state.pictures[i]} 
                            onMouseOver={() => {this.handleMouseOver(i, person.picture)}}
                            onMouseOut={() => { this.handleMouseOut(i, person.sketch) }}
                            className="peoplePic person" />
                        <div className="peopleName">{person.name}</div>
                        <div className="peopleTagline">{`"${person.title}"`}</div>
                    </div>
                ))}
            </div>

            {/* <Cluster
                    num={1}
                    dep="admin"
                    background={this.state.peopleThree1}
                    department={this.state.department1}
                    visibility={this.state.visibility1}
                    func={this.straightenCluster1}
                    depVisibility={this.state.depVisibility}
                    array={this.state.people}
                    clusterPic={this.state.department1}
                    hiddenPic={this.state.hiddenPic}
                />

                <Cluster
                    num={2}
                    dep="architecture | interiors"
                    background={this.state.peopleThree2}
                    department={this.state.department2}
                    visibility={this.state.visibility2}
                    func={this.straightenCluster2}
                    depVisibility={this.state.depVisibility}
                    array={this.state.people}
                    clusterPic={this.state.department2}
                    hiddenPic={this.state.hiddenPic}
                />

                <Cluster
                    num={3}
                    dep="digital design"
                    background={this.state.peopleThree3}
                    department={this.state.department3}
                    visibility={this.state.visibility3}
                    func={this.straightenCluster3}
                    depVisibility={this.state.depVisibility}
                    array={this.state.people}
                    clusterPic={this.state.department3}
                    hiddenPic={this.state.hiddenPic}
                /> */}

        </div>
    )
};
};

export default People;