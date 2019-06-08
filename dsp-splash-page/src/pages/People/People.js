import React, { Component } from "react";
import { Link } from "react-router-dom";
import LocationMap from "./LocationMap";
import "./css/people.css";
import "./css/mediaPeople.css";

import people from "../../JSON/People/people.json";

class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people,
            pictures: []
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        this.shuffleArray(this.state.people);

        let picArr = [];

        this.state.people.map(person => (
            picArr.push(person.sketch)
        ));

        this.setState({
            pictures: picArr
        })
    };

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        };
    };

    handleMouseOver = (i, pic) => {
        let arr = this.state.pictures.slice();
        arr[i] = pic;
        this.setState({
            pictures: arr
        })
    };

    render() {
        return (
            <div id="peopleBackground">
                <div id="peopleTop" className="nightBlue-background">
                    <div id="aboutUs" className="slateWhite-text">we are . . . <span id="aboutUsBreak">design service professionals</span></div>
                </div>

                <div id="peoplePicBox">
                    {this.state.people.map((person, i) => (
                        <div className="picContainer" >
                            <img src={process.env.PUBLIC_URL + this.state.pictures[i]}
                                onMouseOver={() => { this.handleMouseOver(i, person.picture) }}
                                onMouseOut={() => { this.handleMouseOver(i, person.sketch) }}
                                className="peoplePic person" alt="Important Person" />
                            <div className="peopleName">{person.name}</div>
                            <div className="peopleTagline">{`"${person.title}"`}</div>
                        </div>
                    ))}
                </div>
                
                <LocationMap />
                
            </div>
        )
    };
};

export default People;