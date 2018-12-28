import React, { Component } from "react";
import YourThing from "../../../components/YourThing";
import "./hospitality.css";

class Hospitality extends Component {
    state = {

    };

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    render() {
        return (
            <div id="yourWorkStory" class="yourOne">
                <YourThing
                topWords="Your story."
                bottomWords="Told."
                link="#"
                buttonWords="Learn more"
                bottomDescription="A space for connections" 
                /> 
            </div>
        )
    }
};

export default Hospitality;