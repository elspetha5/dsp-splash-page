import React, { Component } from "react";
import "./home.css";

// Files
import ideas from "../../JSON/home.json";

class Home extends Component {
    state = {
        ideas
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    render() {
        return (
            <div id="homepage">
                <div className="taglineBackground">
                    <div className="taglineBox">
                        <div className="taglineThesis">Design Service Professionals . . .</div>
                        <div className="taglineThesis">emerging at the intersection</div>
                        <div className="taglineThesis">of design + delivery</div>
                    </div>
                </div>

            </div>
        )
    };
};

export default Home;