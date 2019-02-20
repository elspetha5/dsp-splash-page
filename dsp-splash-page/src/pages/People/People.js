import React, { Component } from "react";
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
            <div>
                <div id="peopleTop">
                    <div id="aboutUs">About Us</div>
                </div>

                <div id="peopleWrapper">
                    {this.state.people.map(person => (
                        <img src={person.picture} alt="person" className="peoplePic"/>
                    ))}

                    
                </div>

            </div>
        )
    };
};

export default People;